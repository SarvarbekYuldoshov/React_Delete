import { Button, Input, Select } from 'antd';
import axios from 'axios';
import React, { useState } from 'react'
import { Form } from 'react-router-dom';

const Login = () => {
    const [phone,setPhone] = useState('');
    const [password,setPassword] = useState('');
    const navigate = () =>()
    const Registr = () => {
        axios({
            url:`https://autoapi.dezinfeksiyatashkent.uz/api/auth/signin/`,
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
        })
    }
  return (
    <div>
        <Form name="basic"labelCol={{span: 8,}}wrapperCol={{span: 16,}}style={{maxWidth: 600,}}initialValues={{remember: true,}}autoComplete="off">
            <Form.Item label="Username"name="username"rules={[
                {
                    required: true,
                    message: 'Please input your username!',
                },
            ]}>
                    <Input />
            </Form.Item>
            <Form.Item label="Password"name="password"rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
            ]}>
            <Input.Password />
            </Form.Item>
            <Form.Item name="remember"valuePropName="checked"wrapperCol={{offset: 8,span: 16,}}>
                    <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
    </div>
  )
}

export default Login
