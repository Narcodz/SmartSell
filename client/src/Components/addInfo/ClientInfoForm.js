import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';

const ClientInfoForm = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
    // Perform registration logic here
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item
        label="Business Name"
        name="businessName"
        rules={[{ required: true, message: 'Please enter your business name' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Business Email Address"
        name="businessEmail"
        rules={[
          { required: true, message: 'Please enter your business email address' },
          { type: 'email', message: 'Please enter a valid email address' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Business Contact"
        name="businessContact"
        rules={[{ required: true, message: 'Please enter your business contact' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Preferred Language"
        name="preferredLanguage"
        rules={[{ required: true, message: 'Please select your preferred language' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="termsAndCondition"
        valuePropName="checked"
        rules={[{ required: true, message: 'Please accept the terms and conditions' }]}
      >
        <Checkbox>
          I agree to the <a href="/terms">Terms and Conditions</a>
        </Checkbox>
      </Form.Item>

    
    </Form>)
}

export default ClientInfoForm