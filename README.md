- getStaticProps (Static Generation)
  Fetch data at **build time**

- getStaticPaths (Static Generation)
  Specify dynamic routes to pre-render pages based on data

- getServerSideProps (Server-side Rendering)
  Fetch data on **each request**

* Static Generation : 미리 모든 파일들을 정적 페이지로 만들어서 파일 단위로 serving 하는 방식
* Server-side Rendering : 해당 페이지를 서버에서 만들어서 serving (요청을 받았을 때마다 data fetching)

```js
export async function getStaticPaths() {
  const client = sanityClient({
    dataset: "production",
    projectId: "klr1kbxl",
    useCdn: process.env.NODE_ENV === "production",
  });

  const posts = await client.fetch(`*[_type == 'post']{
  title, 
  subtitle, 
  createdAt, 
  'content': content[]{
  	...,
  	...select(_type == 'imageGallery' => {'images': images[]{..., 'url': asset -> url}})
	},
  'slug': slug.current,
  'thumbnail': {
    'alt': thumbnail.alt,
    'imageUrl': thumbnail.asset -> url
  },
  'author': author -> {
    name,
    role,
    'image': image.asset -> url
  },
  'tag': tag -> {
    title,
    'slug': slug.current
  }
}`);

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
```

fallback : true 일때는 path에 없는 경우 일때는 404 에러페이지 이동 x
false 일때는 404 에러페이지 이동

### next.confing.js

```js
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    domains: ["cdn.sanity.io"],
  },
  env: {
    SANITY_PROJECT_ID: "klr1kbxl",
  },
};

module.exports = nextConfig;
```

env를 등록하여 환경변수 사용이 가능하다.

(사용)

```js
    projectId: process.env.SANITY_PROJECT_ID,

```

### 배포

1. SSR 방식

2. Static site generatorn 방식

```
npm run build
```

Static site generatorn 방식
package.json

```
"build": "next build && next export"

```

npx serve out
