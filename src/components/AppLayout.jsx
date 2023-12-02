import React, { useEffect } from 'react';
import { Breadcrumb, Button, Layout, Menu, Row, theme } from 'antd';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/authSlice';
const { Header, Content, Footer } = Layout;
const AppLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout className='layout'>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', gap: '10px' }}>
          <Link
            to={'/'}
            style={{
              color: '#fff',
              fontSize: '1rem',
            }}
          >
            All Tours
          </Link>
        </div>
        <div
          className='app-logo'
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            src='img/logo-white.png'
            alt=''
            style={{ objectFit: 'contain', height: '30px', width: '100%' }}
          />
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          {!user ? (
            <>
              <Button onClick={() => navigate('/login')}>Login</Button>
              <Button onClick={() => navigate('/signup')}>Sign up</Button>
            </>
          ) : (
            <Button
              onClick={() => {
                dispatch(logout());
                navigate('/');
              }}
            >
              Logout
            </Button>
          )}
        </div>
      </Header>
      <Content
      // style={{
      //   padding: '0 50px',
      // }}
      >
        {/* <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Tour</Breadcrumb.Item>
        </Breadcrumb> */}
        <div className='site-layout-content'>
          <Outlet />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default AppLayout;
