import React, { Component } from 'react';
import './NewStudent.css';

class NewStudent extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      quote: '',
      superlative: ''
    }
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
        />

        <input
          type='text'
          placeholder='Quote'
          name='quote'
          value={this.state.quote}
        />

        <input
          type='text'
          placeholder='Superlative'
          name='superlative'
          value={this.state.superlative}
        />

        <button>SUBMIT</button>
      </form>
    )
  }
}

export default NewStudent;
