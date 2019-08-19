import React from 'react';
import './Person.css';

const Person = (props) => {
  let button = <button onClick={ () => props.deleteStudent(props.qualities.id)}>🗑</button>
  let quote = <p className="quote" contentEditable={true}> {props.qualities.quote} </p>
  let superlative = <p className="superlative" contentEditable={true}> {props.qualities.superlative} </p>

  if(props.qualities.id < 20) {
    button = ''
  }

  if(props.qualities.quote === '') {
    quote = <p>Click here to Add a Quote!</p>
  }

  if(props.qualities.superlative === '') {
    superlative = <p>Click here to Add a Superlative!</p>
  }

  return(
      <section >
        <img className="photo" src={props.qualities.photo} alt={props.qualities.name} />
        <h4 className="name" contentEditable={true}> {props.qualities.name} </h4>
        {quote}
        {superlative}
        {button}
      </section>
  )
};

export default Person;
