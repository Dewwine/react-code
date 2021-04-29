import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.post}>
      <div className={s.description}> {props.description} </div>
      <img src={props.image} alt=""/>
    </div>
  );
};

export default Post;