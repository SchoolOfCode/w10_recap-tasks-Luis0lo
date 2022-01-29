import React from 'react';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import { Avatar, Card, Space, Row } from 'antd';
import { UserOutlined, SyncOutlined } from '@ant-design/icons';

const User = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (

      <Row justify="center">
        <Space>
          Loading <SyncOutlined spin />
        </Space>
      </Row>
    );
  }

  return !isAuthenticated ? (
    <Row justify="center">
      <LoginButton />
    </Row>
  ) : (
    <div className="site-card-border-less-wrapper">
      <Row justify="center">
        <Card
          align="center"
          title="Welcome Back"
          bordered={false}
          style={{ width: 300 }}
        >
          <Avatar
            src={user.picture}
            alt={user.name}
            size={100}
            icon={<UserOutlined />}
          />

          <h2>{user.name}</h2>
          <LogoutButton />
        </Card>
      </Row>
    </div>
  );
};

export default User;
