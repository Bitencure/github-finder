import React, { Fragment } from 'react';
import Users from '../users/Users';
import SearchBar from '../layout/SearchBar';

export const Home = () => (
  <Fragment>
    <SearchBar />
    <Users />
  </Fragment>
);

export default Home;
