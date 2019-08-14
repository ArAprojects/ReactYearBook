import React from 'react';
import Person from './Person';
import './Cohort.css';

const Cohort = (props) => {
  console.log(props)
  return <main>
    {props.staff.map(individual => <Person qualities={individual} key={individual.id} /> )}
    {props.students.map(individual => <Person qualities={individual} key={individual.id} deleteStudent={props.deleteStudent} /> )}
  </main>

}

export default Cohort;
