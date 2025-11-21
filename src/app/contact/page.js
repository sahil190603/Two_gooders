"use client";

import React from "react";
import "antd/dist/reset.css";
import { Form, Input, Button, Row, Col, Card } from "antd";

export default function Contactpage() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Contact form submitted:", values);
    form.resetFields();
  };

  return (
    <div
      style={{
        marginTop: "80px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "60px 20px",
      }}
    >
      <div style={{ maxWidth: 800, width: "100%" }}>

        <h2 style={{ textAlign: "center", marginBottom: 6 }}>
          Contact Us
        </h2>
        <h3 style={{ textAlign: "start", marginBottom: 18 }}>
          Ask us anything below!
        </h3>

        <Card style={{ boxShadow: "none", borderRadius: 2 }}>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            requiredMark={false}
          >
            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <Form.Item
                  name="name"
                  rules={[{ required: true, message: "Please enter your name" }]}
                >
                  <Input placeholder="Name" />
                </Form.Item>
              </Col>

              <Col xs={24} sm={12}>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                    { type: "email", message: "Enter a valid email" },
                  ]}
                >
                  <Input placeholder="Email" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item name="phone">
              <Input placeholder="Phone Number" />
            </Form.Item>

            <Form.Item name="message">
              <Input.TextArea placeholder="Message" rows={6} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Send
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
}
