import React from 'react'
import { Form, Input, Button, Select } from 'antd';

const { Option } = Select;

const ShopInfoForm = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
    // Perform registration logic here
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item
        label="Shop Name"
        name="shopName"
        rules={[{ required: true, message: 'Please enter the shop name' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Shop Address"
        name="shopAddress"
        rules={[{ required: true, message: 'Please enter the shop address' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Shop Contact"
        name="shopContact"
        rules={[{ required: true, message: 'Please enter the shop contact' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Shop Type"
        name="shopType"
        rules={[{ required: true, message: 'Please select the shop type' }]}
      >
        <Select>
          <Option value="grocery">Grocery</Option>
          <Option value="hardware">Hardware</Option>
          <Option value="pharmacy">Pharmacy</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Shop Location"
        name="shopLocation"
        rules={[{ required: true, message: 'Please enter the shop location' }]}
      >
        <Input />
      </Form.Item>

      
    </Form>
  );
}

export default ShopInfoForm