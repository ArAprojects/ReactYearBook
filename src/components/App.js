import React, { Component } from 'react';
import Cohort from './Cohort';
import people from '../data/yearbook-data.js';
import NewStudent from './NewStudent';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students
    }
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1>Turing Yearbook</h1>
      </header>
        <NewStudent />
        <Cohort staff = {this.state.staff} students = {this.state.students}/>
      </div>
    );
  }
}

export default App;
