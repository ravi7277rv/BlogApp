import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import PostApi from '../api/PostApi';
import format from 'date-fns/format';
import DataContext from '../context/DataContext';

const EditPost = () => {

    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');

    const { posts, setPosts } = useContext(DataContext);

    const { id } = useParams();
    const navigate = useNavigate();

    const post = posts.find(post => (post.id).toString() === id);

    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [post, setEditTitle, setEditBody])

    const handleEdit = async (id) => {
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const updatedPost = { id, title: editTitle, datetime, body: editBody };
        try {
            const response = await PostApi.put(`/posts/${id}`, updatedPost);
            setPosts(posts.map(post => post.id === id ? { ...response.data } : post));
            setEditTitle('');
            setEditBody('');
            navigate('/');
        } catch (error) {
            console.log(`Error:${error.message}`)
        }
    }

    return (
        <main className='newpost'>
            {editTitle &&
                <>
                    <h2>Edit Post</h2>
                    <form className='newpostform' onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="postTitle">Title</label>
                        <input
                            id="postTitle"
                            type="text"
                            placeholder='Enter post title'
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                        />
                        <label htmlFor="postBody">Body</label>
                        <textarea
                            id='postBody'
                            type="text"
                            placeholder='Enter post here'
                            value={editBody}
                            onChange={(e) => setEditBody(e.target.value)}
                        />
                        <input type="submit" onClick={() => handleEdit(post.id)} value='Add Post' className='submitButton' />
                    </form>
                </>
            }
            {!editTitle &&
            <>
            <h2>Post Not Found</h2>
            <p>Well, that's disappointing.</p>
            <p>
                <Link to='/' >Visit Our Homepage</Link>
            </p>
            </>
            }
        </main>
    );
}

export default EditPost;
