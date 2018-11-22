// Your First React Component

// Use an Event Listener in a Component

render() {
  return (
    <div onHover={myFunc}>
    </div>
  );
}

// sample
import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }

  render() {
    return <button onClick={this.scream}>AAAAAH!</button>;
  }
}

ReactDOM.render(<Button />, document.getElementById('app'));
