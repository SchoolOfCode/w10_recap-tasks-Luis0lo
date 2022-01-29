import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Row } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Row justify="center">
      <Button
        onClick={() => logout({ returnTo: window.location.origin })}
        type="ghost"
        shape="round"
        icon={<LogoutOutlined />}
      >
        Logout
      </Button>
    </Row>
  );
};

export default LogoutButton;
