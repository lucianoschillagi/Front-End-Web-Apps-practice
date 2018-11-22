// Components and Advanced JSX

// Use a Conditional in a Render Function

import React from 'react';
import ReactDOM from 'react-dom';

class TodaysPlan extends React.Component {
  render() {
    let task;
    if (!apocalypse) {
      task = 'learn React.js'
    } else {
      task = 'run around'
    }

    return <h1>Today I am going to {task}!</h1>;
  }
}

ReactDOM.render(
	<TodaysPlan />,
	document.getElementById('app')
);

// sample
import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class TonightsPlan extends React.Component {
  render() {
    if fiftyFifty {
      task = 'out'
    } else {
      task = 'to bed'
    }
    return <h1>Tonight I am going {task} WOO </h1>;
  }
}

ReactDOM.render(
  <TonightsPlan/>,
	document.getElementById('app')
)
