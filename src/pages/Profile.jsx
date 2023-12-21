import { Button, Form, Input, Skeleton } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AvatarUpload from '../components/AvatarUpload';
import { privateAxios } from '../api/axios';
import { isLoggedIn } from '../features/authSlice';

export default function Profile() {
  const { user, isSuccess } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });
    await privateAxios.patch('users/update-me', formData);
    dispatch(isLoggedIn());
  };
  if (!isSuccess) return <Skeleton />;
  return (
    <div className='w-[70vw] min-h-[400px] bg-white m-auto mt-5 p-6'>
      <div className='flex justify-between items-center'>
        <div>
          <AvatarUpload photo={user?.photo} />
        </div>
      </div>
      <Form
        className='w-full'
        layout='vertical'
        initialValues={{
          name: user.name,
          email: user.email,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name={'name'}
          rules={[{ required: true, message: 'Please enter your name' }]}
          label='Name'
          // initialValue={user?.name}
        >
          <Input type='text' placeholder='name' />
        </Form.Item>
        <Form.Item
          name={'email'}
          rules={[{ required: true, message: 'Please enter your email' }]}
          label='Email'
        >
          <Input type='text' placeholder='email' />
        </Form.Item>
        <Form.Item>
          <Button htmlType='submit'>Update Info</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
