// import React from 'react';

// import 'antd/dist/antd.css';

// const Comments = ({ author, comment }) => {
//   return (
//     <div>
//       <h4>{author} says:</h4>
//       <p>{comment}</p>
//     </div>
//   );
// };

// export default Comments;
import 'antd/dist/antd.css';

import React, { createElement, useState } from 'react';
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from '@ant-design/icons';

const Comments = ({ author, comment }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const like = () => {
    setLikes(likes + 1);
    // setDislikes(0);
    setAction('liked');
  };

  const dislike = () => {
    // setLikes(0);
    setDislikes(dislikes + 1);
    setAction('disliked');
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    // <span key="comment-basic-reply-to">Reply to</span>,
  ];

  return (
    <Comment
      actions={actions}
      author={author}
      avatar={
        <Avatar src="https://joeschmoe.io/api/v1/random" alt="{author}" />
      }
      content={<p>{comment}</p>}
      datetime={
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
    />
  );
};
export default Comments;
