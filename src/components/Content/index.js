import React from 'react';
import css from './Content.module.css';
import { Button } from 'antd';
import { LikeOutlined } from '@ant-design/icons';

const Content = ({ title, paragraphs }) => {
  return (
    <div className={css.container}>
      <h2>{title}</h2>
      {paragraphs.map((paragraph) => (
        <p className={css.paragraph} key={paragraph.id}>
          {paragraph.text}
        </p>
      ))}
      <Button type="primary" shape="round" icon={<LikeOutlined />}>
        LIKE
      </Button>
    </div>
  );
};

export default Content;
