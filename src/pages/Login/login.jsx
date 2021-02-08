import React, { Component } from 'react'
import './login.less'

//引入 antd 卡片组件
import { Card } from 'antd';
//引入antd表单组件
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

//引入图片
import logo from './image/logo.png'

const gridStyle = {
    width: '100%',
    textAlign: 'center',
};
const loginSubmit = (values) => {
    console.log('Received values of form: ', values);
  };

export default class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="login-header">
                    <img src={logo} alt="图片"/>
                    <h1>后台管理系统</h1>
                </div>
                <div className="login-content">
                    <Card.Grid className="login-box" style={gridStyle}>
                        <h2>用户登录</h2>
                        <Form
                            onSubmit={this.handleSubmit}
                            name="normal_login"
                            className="login-form"
                            onFinish={loginSubmit}
                            initialValues={{ remember: true }}
                            >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input your Username!' }]}
                            >
                                <Input 
                                prefix={<UserOutlined className="site-form-item-icon" />} 
                                placeholder="Username" 
                                autoComplete='username'
                                />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your Password!' }]}
                            >
                                <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                                autoComplete='password'
                                />
                            </Form.Item>
                            
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                                </Button> 
                            </Form.Item>
                         </Form>
                    </Card.Grid>
                </div>
                 
            </div>
        )
    }
}
