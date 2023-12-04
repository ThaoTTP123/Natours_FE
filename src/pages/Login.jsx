import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { isLoggedIn, login } from '../features/authSlice';
import { useDispatch, useSelector } from 'react-redux';
const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#55c57a', // Primary color
};

const formStyle = {
  maxWidth: '300px',
  width: '100%',
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const buttonStyle = {
  width: '100%',
  backgroundColor: '#28b487', // Info color
  borderColor: '#28b487', // Info color
  color: 'white',
};
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { isSuccess, isError, user } = useSelector((state) => state.auth);
  if (user) return <Navigate to={'/'} replace />;

  const onFinish = (values) => {
    dispatch(login(values));
    if (isSuccess) {
      if (state) {
        return navigate(`/${state.tourId}`);
      } else navigate('/');
    }
  };
  return (
    <div style={containerStyle}>
      <Form
        name='normal_login'
        style={formStyle}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name='email'
          rules={[{ required: true, message: 'Please input your Email!' }]}
        >
          <Input
            prefix={<MailOutlined style={{ color: '#55c57a' }} />}
            placeholder='Email'
          />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined style={{ color: '#55c57a' }} />}
            type='password'
            placeholder='Password'
          />
        </Form.Item>
        <Form.Item>
          {isError && (
            <p style={{ color: 'red' }}>Invalid username or password</p>
          )}
          <Button type='primary' htmlType='submit' style={buttonStyle}>
            Log in
          </Button>
        </Form.Item>
        <span style={{ marginBottom: 0, color: '#777', fontStyle: 'italic' }}>
          Don't have any account?
        </span>
        &nbsp;
        <Link to={'/signup'}>Sign up</Link>
      </Form>
    </div>
  );
};

export default Login;
