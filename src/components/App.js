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
    this.setState({ students: [...this.state.students, newStudent] });
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
        <NewStudent newStudent={this.newStudent} students = {this.state.students}/>
        <Cohort staff = {this.state.staff} students = {this.state.students} deleteStudent={this.deleteStudent} /> 
      </div>
    );
  }
}

export default App;
