// INTRO TO JSX

// Passing a Variable to ReactDOM.render()

const toDoList = (
  <ol>
    <li>Learn React</li>
    <li>Become a Developer</li>
  </ol>
);

ReactDOM.render(
  toDoList, 
  document.getElementById('app')
);


// sample

import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myList = (
	<ul>
  	<li></li>
  	<li></li>
  	<li></li>
  </ul>
)

ReactDOM.render(myList, document.getElementById('app') );


