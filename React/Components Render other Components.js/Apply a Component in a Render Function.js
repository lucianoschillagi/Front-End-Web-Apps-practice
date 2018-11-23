// Components Render Other Components

// Apply a Component in a Render Function

import React from 'react';
import ReactDOM from 'react-dom';


class ProfilePage extends React.Component {
  render() {
    return (
      <div>
		<NavBar /> // <-here!!!!
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}