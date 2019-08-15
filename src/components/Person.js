import React from 'react';
import './Person.css';





const Person = (props) => {

  var button = <button onClick={ () => props.deleteStudent(props.qualities.id)}>🗑</button>
  console.log(props.qualities.id)
  if(props.qualities.id < 20) {
    button = ''
  }



  return(
      <section>
        <img className="photo" src={props.qualities.photo} alt={props.qualities.name} />
        <h4 className="name"> {props.qualities.name} </h4>
        <p className="quote"> {props.qualities.quote} </p>
        <p className="superlative"> {props.qualities.superlative} </p>
        {button}
      </section>
  )
};

export default Person;
