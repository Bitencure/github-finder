import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import SearchBar from './components/layout/SearchBar';

class App extends Component {
  state = {
    users: [],
    loading: true
  };

  async componentDidMount() {
    const res = await axios.get(
      `https://api.github.com/users?
          client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
          client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`
    );

    this.setState({ loading: false, users: res.data });
  }

  searchUsers = async search => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${search}&
      client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
      client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`
    );
    this.setState({ loading: false, users: res.data.items });
  };

  render() {
    return (
      <div className='App'>
        <Navbar />

        <div className='container'>
          <SearchBar searchUsers={this.searchUsers} />
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
