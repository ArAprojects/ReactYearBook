import React from 'react';
import Person from './Person';
import './Cohort.css';

const Cohort = (props) => {
  console.log(props)
  return <div> {props.staff.map(individual => <Person qualities={individual} /> )} </div>
}

export default Cohort;
