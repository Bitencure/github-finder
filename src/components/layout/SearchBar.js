import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    search: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.search);
    // this.setState({ search: '' });
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
            value={this.state.input}
            onChange={this.handleChange}
            placeholder='Search Users...'
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          ></input>
        </form>
      </div>
    );
  }
}
