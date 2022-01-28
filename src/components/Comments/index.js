import React from 'react';

const Comments = ({ author, comment }) => {
  return (
    <div>
      <h4>{author} says:</h4>
      <p>{comment}</p>
    </div>
  );
};

export default Comments;
