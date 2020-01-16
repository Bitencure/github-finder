import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const SearchBar = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const { users, clearUsers } = githubContext;

  const [search, setSearch] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (search === '') {
      alertContext.setAlert('Please Enter Something...', 'light');
    } else {
      githubContext.searchUsers(search);
      setSearch('');
    }
  };

  const handleChange = event => setSearch(event.target.value);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='search'
          value={search}
          onChange={handleChange}
          placeholder='Search Users...'
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
        {users.length > 0 && (
          <input
            type='reset'
            value='Clear'
            onClick={clearUsers}
            className='btn btn-light btn-block'
          />
        )}
      </form>
    </div>
  );
};

export default SearchBar;
