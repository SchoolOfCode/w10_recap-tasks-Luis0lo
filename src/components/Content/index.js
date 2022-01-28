import React from 'react';

const Content = ({ title, paragraphs }) => {
  return (
    <div>
      <h2>{title}</h2>
      {paragraphs.map((paragraph) => (
        <p key={paragraph.id}>{paragraph.text}</p>
      ))}
      <button>Like 👍</button>
    </div>
  );
};

export default Content;
