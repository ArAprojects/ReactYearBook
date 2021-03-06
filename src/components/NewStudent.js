import React, { Component } from 'react';
import './NewStudent.css';

class NewStudent extends Component {
  constructor() {
    super();
    this.state = {
      photo: 'https://placekitten.com/200/300',
      name: '',
      quote: '',
      superlative: '',
      id: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.setState({id: this.props.students[this.props.students.length - 1].id + 1 })
  }

  clearInputs = () => {
   this.setState({ name: '', quote: '', superlative: '' });
 }

  submitPerson = event => {
   event.preventDefault();
   this.props.newStudent(this.state);
   this.clearInputs()
   console.log(this.props.students)
 }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />

        <input
          type='text'
          placeholder='Quote'
          name='quote'
          value={this.state.quote}
          onChange={event => this.handleChange(event)}
        />

        <input
          type='text'
          placeholder='Superlative'
          name='superlative'
          value={this.state.superlative}
          onChange={event => this.handleChange(event)}
        />

         <button onClick={event => this.submitPerson(event)}>SUBMIT</button>
      </form>
    )
  }
}

export default NewStudent;
