import React from 'react';
import articles from '../../libs/articles.js';
import Content from '../Content/index.js';
import Comments from '../Comments';

const Article = () => {
  return (
    <div>
      {articles.map((article, i) => {
        return (
          <div key={i}>
            <Content
              key={article.id}
              title={article.title}
              paragraphs={article.paragraphs}
            />
            {article.comments.map((comment) => {
              return (
                <Comments
                  key={comment.id}
                  author={comment.name}
                  comment={comment.text}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Article;
