import React from "react";
import { Col, Row } from "antd";
import Link from "next/link";
import { CodeOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <h1>
      <Row align='middle' style={{ height: 64 }}>
        <Col span={24}>
          <Link href='/'>
            <a>
              <div
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                }}>
                <CodeOutlined />
                Himchan&apos;s blog
              </div>
            </a>
          </Link>
        </Col>
      </Row>
    </h1>
  );
};

export default Header;
