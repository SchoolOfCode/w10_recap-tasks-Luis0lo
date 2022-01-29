import React from 'react';
import User from '../User';

const HomePage = () => {
  return (
    <div style={{padding: '7rem 3rem'}}>
      <h1 style={{marginBottom: '3rem'}}>Welcome to Weekend Blog</h1>
      <User />
    </div>
  );
};

export default HomePage;
