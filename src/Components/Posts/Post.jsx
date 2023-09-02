import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
  return (
    <article className='post'>
      <Link className='postlink' to={`/post/${post.id}`} >
        <h2>{post.title}</h2>
        <p className='postDate'>{post.datetime}</p>
      </Link>
      <p className='postbody'>{
        (post.body).length <= 30
        ? post.body : `${(post.body).slice(0,30)}...`
      }</p>
    </article>
  );
}

export default Post;
