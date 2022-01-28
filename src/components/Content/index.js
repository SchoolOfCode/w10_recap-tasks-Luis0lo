import React from 'react';
import css from './Content.module.css';

const Content = ({ title, paragraphs }) => {
  return (
    <div className={css.container}>
      <h2>{title}</h2>
      {paragraphs.map((paragraph) => (
        <p className={css.paragraph} key={paragraph.id}>
          {paragraph.text}
        </p>
      ))}
      <button>Like 👍</button>
    </div>
  );
};

export default Content;
