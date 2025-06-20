import React from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";

export default function Login() {
  const onFinish = (values) => {
    axios
      .post("http://localhost:5000/api/login", values)
      .then((res) => {
        message.success(res.data.message);
        console.log("Logged in user:", res.data.user);
      })
      .catch((err) =>
        message.error(err.response?.data?.error || "Login failed")
      );
  };

  return (
    <Form
      name="login"
      onFinish={onFinish}
      style={{ maxWidth: 400, margin: "auto", marginTop: 50 }}
    >
      <Form.Item
        name="email"
        rules={[
          {
            type: "email",
            required: true,
            message: "Please input your email!",
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
          Login
        </Button>
      </Form.Item>
    </Form>
  );
}
