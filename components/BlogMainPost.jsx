import { Card, Col, Row } from "antd";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import dayjs from "dayjs";

const BlogMainPost = ({
  slug,
  thumbnail,
  title,
  subtitle,
  author,
  createdAt,
}) => {
  console.log(thumbnail.imageUrl);
  return (
    <Row align='middle' style={{ height: "auto" }}>
      <Col span={24}>
        <Link href={`/post/${slug}`}>
          <a>
            <Card
              style={{ border: "none" }}
              cover={
                <Image
                  src={thumbnail.imageUrl}
                  alt={thumbnail.alt}
                  width={500}
                  height={500}
                />
              }>
              <h1>{title}</h1>
              <h3>{subtitle}</h3>
              <h4>
                {author.name} * {dayjs(createdAt).format("MMMM D")}
              </h4>
            </Card>
          </a>
        </Link>
      </Col>
    </Row>
  );
};

export default BlogMainPost;
