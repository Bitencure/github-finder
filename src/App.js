import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import SearchBar from './components/layout/SearchBar';
import './App.css';

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: true,
    alert: null
  };

  async componentDidMount() {
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
        client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`
    );
    this.setState({ loading: false, users: res.data });
  }

  searchUsers = async search => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${search}&
        client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
        client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`
    );
    this.setState({ loading: false, users: res.data.items });
  };

  getUser = async username => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}?
        client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
        client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`
    );
    console.log(username);
    console.log(res);
    this.setState({ loading: false, user: res.data });
  };

  clearUsers = () => {
    this.setState({ users: [] });
  };

  setAlert = (message, type) => {
    this.setState({ alert: { message, type } });

    setTimeout(() => this.setState({ alert: null }), 4000);
  };

  render() {
    const { users, user, loading, alert } = this.state;
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Alert alert={alert} />
                    <SearchBar
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users
                      users={users}
                      loading={loading}
                      getUser={this.getUser}
                    />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/user/:login'
                render={props => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    user={user}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
