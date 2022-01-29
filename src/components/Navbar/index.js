import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

const Navbar = ({ auth }) => {
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        {auth ? (
          <>
            <Menu.Item key="2">
              <Link to="/wikipigeon">WikiPigeon</Link>
            </Menu.Item>
          </>
        ) : (
          ''
        )}
      </Menu>
    </Header>
  );
};

export default Navbar;
