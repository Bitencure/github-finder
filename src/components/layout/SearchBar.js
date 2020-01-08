import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  state = {
    search: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.search === '') {
      this.props.setAlert('Please Enter Something...', 'light');
    } else {
      this.props.searchUsers(this.state.search);
      this.setState({ search: '' });
    }
  };

  handleReset = e => {
    e.preventDefault();
    this.props.clearUsers();
    this.setState({ search: '' });
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='search'
            value={this.state.search}
            onChange={this.handleChange}
            placeholder='Search Users...'
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
          {this.props.showClear && (
            <input
              type='reset'
              value='Clear'
              onClick={this.handleReset}
              className='btn btn-light btn-block'
            />
          )}
        </form>
      </div>
    );
  }
}
