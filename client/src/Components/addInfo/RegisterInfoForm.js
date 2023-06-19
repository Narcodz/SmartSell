import React from 'react'
import { Form, Input, Button } from 'antd';

const RegisterInfoForm = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
    // Perform registration logic here
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item
        label="Name"
        name="registerName"
        rules={[{ required: true, message: 'Please enter your register name' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Register ID"
        name="registerID"
        rules={[{ required: true, message: 'Please enter your register ID' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email Address"
        name="registerEmail"
        rules={[
          { required: true, message: 'Please enter your email address' },
          { type: 'email', message: 'Please enter a valid email address' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please enter your username' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please enter your password' }]}
      >
        <Input.Password />
      </Form.Item>
    </Form>
  );
}

export default RegisterInfoForm