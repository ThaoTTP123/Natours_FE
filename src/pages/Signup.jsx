import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, SafetyOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const Signup = () => {
  const [error, setError] = useState(null);

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
  const onFinish = (values) => {
    // Simulating a login request (replace with actual authentication logic)
    if (values.username === 'demo' && values.password === 'password') {
      console.log('Login successful!');
      setError(null);
    } else {
      console.log('Login failed!');
      setError('Invalid username or password');
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
          name='username'
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input
            prefix={<UserOutlined style={{ color: '#55c57a' }} />}
            placeholder='Username'
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
          rules={[{ required: true, message: 'Please confirm your password!' }]}
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
