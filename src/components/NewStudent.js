import React, { Component } from 'react';
import './NewStudent.css';

class NewStudent extends Component {
  constructor() {
    super();
    this.state = {
      photo: 'https://placekitten.com/200/300',
      name: '',
      quote: '',
      superlative: ''
    }
  }

  handleChange = event => {
    console.log(this)
    this.setState({ [event.target.name]: event.target.value });
  }

  clearInputs = () => {
   this.setState({ name: '', quote: '', superlative: '' });
 }

  submitPerson = event => {
   event.preventDefault(); // prevents the page from refreshing when the form submits
   this.props.newStudent(this.state); // using the addstudent method from App that we passed as a prop to Form // invoking the method I wrote below to reset the inputs
   this.clearInputs()
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
