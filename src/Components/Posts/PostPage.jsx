import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Post.css';
import { useNavigate } from 'react-router-dom';
import PostApi from '../api/PostApi';
import DataContext from '../context/DataContext';

const PostPage = () => {

  const { posts, setPosts} = useContext(DataContext);

  const navigate = useNavigate();
  const { id } = useParams();
  const post = posts.find(post => (post.id).toString() === id);

  const handleDelete = async (id) => {
   try {
    await PostApi.delete(`/posts/${id}`);
    const postList = posts.filter((post) => post.id !== id);
    setPosts(postList);
    navigate('/');
   } catch (error) {
    console.log(`Error:${error.message}`)
   }
  }

  return (
    <main className='postpage'>
      <article className='postpage'>
        {post && 
            <>
              <h2>{post.title}</h2>
              <p className='postdate'>{post.datetime}</p>
              <p className='postbody'>{post.body}</p>
              <Link to={`/edit/${post.id}`}><button className='editbutton'>Edit</button> </Link>
              <button className='deletebutton' onClick={() => handleDelete(post.id)}>Delete</button>
            </>
        }
        { !post &&
        <>
          <h2>Post Not Found</h2>
          <p>Well, that's disappointing</p>
          <p>
            <Link to={`/`} >Visit Our Homepage</Link>
          </p>
        </>
        }
      </article>
    </main>
  );
}

export default PostPage;
<h1>This is the postpage</h1>