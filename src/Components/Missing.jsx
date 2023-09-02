import React from 'react';
import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <main className='missing'>
      <h1>Page not found</h1>
      <p>Well, thst's disappointing.</p>
      <p>
        <Link to={`/`} >Visit Our Homepage</Link>
      </p>
    </main>
  );
}

export default Missing;
