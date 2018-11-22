// Components and Advanced JSX

import React from 'react';
import ReactDOM from 'react-dom';

// Use 'this' in a Component
class IceCreamGuy extends React.Component {
  // getter method
  get food() {
    return 'ice cream';
  }

  render() {
    return <h1>I like {this.food}.</h1>;
  }
};

// sample
import React from 'react';
import ReactDOM from 'react-dom';

class MyName extends React.Component {
	// name property goes here:
  get name() {
  	return 'Luciano';
  }

  render() {
    return <h1>My name is {this.name}.</h1>;
  }
}

ReactDOM.render(<MyName />, document.getElementById('app'));


