// Your First React Component

// Create a Component Class
import React from 'react';
import ReactDOM from 'react-dom';

// declara un nuevo 'component class'
class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

ReactDOM.render(
	<MyComponentClass />, 
	document.getElementById('app')
);