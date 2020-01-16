import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <p className='lead'> Whoops, i think this page is in another castle!</p>
      <Link to='/' className='btn btn-light'>
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
