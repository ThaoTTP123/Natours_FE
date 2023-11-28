import React from 'react';
import { Breadcrumb, Button, Layout, Menu, Row, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';
const { Header, Content, Footer } = Layout;
const AppLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
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
          <Button>Login</Button>
          <Button>Sign up</Button>
        </div>
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        {/* <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Tour</Breadcrumb.Item>
        </Breadcrumb> */}
        <Row
          className='site-layout-content'
          style={{
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Row>
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
