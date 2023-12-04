import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  SafetyOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../api/axios';
import { isLoggedIn } from '../features/authSlice';
const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#55c57a', // Primary color
};

const formStyle = {
  maxWidth: '400px',
  width: '100%',
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};
const Signup = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  if (user) return <Navigate to={'/'} replace />;

  const onFinish = async (values) => {
    try {
      const res = await axios.post('users/signup', values);
      dispatch(isLoggedIn());
      navigate('/');
    } catch (error) {
      if (error.response.data.err.code === 11000)
        setError('User with this email has been created!');
      else setError('An error has occurred. Please try again later!');
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
          name='name'
          rules={[{ required: true, message: 'Please input your Email!' }]}
        >
          <Input
            prefix={<UserOutlined style={{ color: '#55c57a' }} />}
            placeholder='Your Full Name'
          />
        </Form.Item>
        <Form.Item
          name='email'
          rules={[
            { required: true, message: 'Please input your Email!' },
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
          ]}
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
        <Form.Item
          name='passwordConfirm'
          rules={[
            { required: true, message: 'Please confirm your password!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error('The new password that you entered do not match!')
                );
              },
            }),
          ]}
        >
          <Input
            prefix={<SafetyOutlined style={{ color: '#55c57a' }} />}
            type='password'
            placeholder='Confirm your password'
          />
        </Form.Item>
        <Form.Item>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Button
            type='primary'
            htmlType='submit'
            style={{
              width: '100%',
              backgroundColor: '#28b487', // Info color
              borderColor: '#28b487', // Info color
              color: 'white',
            }}
          >
            Sign up
          </Button>
        </Form.Item>
        <span style={{ marginBottom: 0, color: '#777', fontStyle: 'italic' }}>
          Already have account?
        </span>
        &nbsp;
        <Link to={'/login'}>Login</Link>
      </Form>
    </div>
  );
};

export default Signup;
