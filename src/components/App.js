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

  newStudent = (newStudent) => {
    this.setState({ students: [...this.state.students, newStudent] }); // sets the new state of APP to be the students array + a new one
  }

  deleteStudent = (id) => {
  const filteredStudents = this.state.students.filter(student => student.id !== id);
  this.setState({ students: filteredStudents });
}

  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1>Turing Yearbook</h1>
      </header>
        <NewStudent newStudent={this.newStudent} students = {this.state.students}/> // new student form gives access to students because need array length.
        <Cohort staff = {this.state.staff} students = {this.state.students} deleteStudent={this.deleteStudent} /> //this is my container to hold students
      </div>
    );
  }
}

export default App;
