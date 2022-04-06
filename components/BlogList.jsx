import { Col, Row } from "antd";
import React from "react";

const BlogList = ({ posts }) => {
  return (
    <>
      <Row align='middle' style={{ height: 100 }}>
        <Col span={24}>
          <h1
            style={{
              fontSize: 30,
              fontWeight: "bold",
            }}>
            Latest Posts
          </h1>
        </Col>
      </Row>
      <Row gutter={16} align='top' style={{ height: "auto" }}></Row>
    </>
  );
};
export default BlogList;
