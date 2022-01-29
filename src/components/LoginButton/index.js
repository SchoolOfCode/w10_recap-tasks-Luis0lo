import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Card, Row } from 'antd';
import { LoginOutlined } from '@ant-design/icons';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Row justify="center">
      <Card style={{ width: 300 }}>
        <h2>Welcome to WikiPigeon!</h2>
        <p>You must login to access our content</p>
        <Button
          onClick={() => loginWithRedirect()}
          type="primary"
          shape="round"
          icon={<LoginOutlined />}
        >
          Login
        </Button>
      </Card>
    </Row>
  );
};

export default LoginButton;
