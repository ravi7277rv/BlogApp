import React, { useContext, useState } from 'react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import PostApi from '../api/PostApi';
import DataContext from '../context/DataContext';

const NewPost = () => {

  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  const {posts, setPosts} = useContext(DataContext);

  const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      const id = posts.length ? posts[posts.length-1].id + 1 : 1;
      const datetime = format(new Date(),'MMMM dd, yyyy pp');
      const newPost = {id,title:postTitle, datetime, body:postBody};
      try {
        const response = await PostApi.post('/posts',newPost)
        const allPosts = [...posts,response.data];
        setPosts(allPosts);
        setPostTitle('');
        setPostBody('');
        navigate('/')
      } catch (error) {
        console.log(`Error:${error.message}`)
      }
     
    }


  return (
    <main className='newpost'>
      <h2>New Post</h2>
      <form className='newpostform' onSubmit={handleSubmit}>
          <label htmlFor="postTitle">Title</label>
          <input 
          id="postTitle"
          type="text" 
          placeholder='Enter post title'
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          />
          <label htmlFor="postBody">Body</label>
          <textarea 
          id='postBody'
          type="text" 
          placeholder='Enter post here'
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
          />
          <input type="submit" value='Add Post' className='submitButton' />
      </form>
    </main>
  );
}

export default NewPost;
