import React from 'react';
import Feed from '../../Components/Posts/Feed.jsx'
import { useContext } from 'react';
import DataContext from '../context/DataContext';



const Home = () => {

  const { searchResult, fetchError, isLoading } = useContext(DataContext);

  return (
    <main className='home'>
        {isLoading && <p className='statusMsg' style={{color:'yellowgreen'}}>Loading posts...</p>}
        {!isLoading && fetchError && <p className='statusMsg' style={{color:'red'}}>{fetchError}</p>}
        {!isLoading && !fetchError && (searchResult.length ? <Feed posts={searchResult}/>
        : <p className='statusMsg'>NO posts to display</p> )}
    </main>
  );
}

export default Home;
