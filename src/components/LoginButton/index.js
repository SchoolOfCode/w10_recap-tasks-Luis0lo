import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Card, Row } from 'antd';
import { LoginOutlined } from '@ant-design/icons';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Row justify="center">
      <Card align="center" style={{ width: 305 }}>
        <h2>Curious about WikiPigeon!</h2>
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
