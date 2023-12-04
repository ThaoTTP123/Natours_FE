import React, { useEffect } from 'react';
import { Button, Layout, theme, Dropdown } from 'antd';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
const { Header, Content, Footer } = Layout;
const items = [
  {
    key: '1',
    label: <Link to='/profile'>Profile</Link>,
  },
  {
    key: '2',
    label: <Link to='/history'>Booked Tour</Link>,
  },
  {
    key: '3',
    label: <Link to='/logout'>Logout</Link>,
  },
];
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
            <Dropdown menu={{ items }} icon={<></>}>
              <Button shape='circle'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='100%'
                  width='50%'
                  viewBox='0 0 448 512'
                >
                  <path d='M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z' />
                </svg>
              </Button>
            </Dropdown>
            // <Button
            //   onClick={() => {
            //     dispatch(logout());
            //     navigate('/');
            //   }}
            // >
            //   Logout
            // </Button>
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
