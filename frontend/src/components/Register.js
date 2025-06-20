import React from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";

export default function Register() {
  const onFinish = (values) => {
    axios
      .post("http://localhost:5000/api/register", values)
      .then(() => message.success("Registration successful"))
      .catch((err) =>
        message.error(err.response?.data?.error || "Registration failed")
      );
  };

  return (
    <Form
      name="register"
      onFinish={onFinish}
      style={{ maxWidth: 400, margin: "auto", marginTop: 50 }}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            type: "email",
            required: true,
            message: "Please input a valid email!",
          },
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}
