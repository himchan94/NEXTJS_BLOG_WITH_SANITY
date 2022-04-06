import { Col, Row } from "antd";
import React from "react";

const BlogHeadline = () => {
  return (
    <Row align='middle' style={{ height: 400, textAlign: "center" }}>
      {" "}
      <Col span={24}>
        <h1 style={{ fontSize: 70, fontWeight: "bold" }}>힘찬 블로그</h1>
        <p style={{ fontSize: 24 }}>프론트엔드 개발자 김힘찬입니다.</p>
      </Col>
    </Row>
  );
};

export default BlogHeadline;
