import React from 'react';
import css from './Content.module.css';
import { Button } from 'antd';
import { LikeOutlined } from '@ant-design/icons';

const Content = ({ title, paragraphs }) => {
  return (
    <div className={css.container} data-testid='article-display'>
      <h2>{title}</h2>
      {paragraphs?.map((paragraph) => (
        <p data-testid={`paragraph-${paragraph.id}`}className={css.paragraph} key={paragraph.id}>
          {paragraph.text} 
        </p>
      ))}
      <Button data-testid='like-button' type="primary" shape="round" icon={<LikeOutlined />}>
        LIKE
      </Button>
    </div>
  );
};

export default Content;
