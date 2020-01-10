import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ createAlert, searchUsers, clearUsers, showClear }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (search === '') {
      createAlert('Please Enter Something...', 'light');
    } else {
      searchUsers(search);
      setSearch('');
    }
  };

  const handleReset = e => {
    e.preventDefault();
    clearUsers();
    setSearch('');
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
        {showClear && (
          <input
            type='reset'
            value='Clear'
            onClick={handleReset}
            className='btn btn-light btn-block'
          />
        )}
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  createAlert: PropTypes.func.isRequired
};

export default SearchBar;
