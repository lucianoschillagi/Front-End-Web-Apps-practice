// Components Render Other Components

//A Component in a Render Function

class Example extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

// sample
class OMG extends React.Component {
  render() {
    return <h1>Whooaa!</h1>;
  }
}

class Crazy extends React.Component {
  render() {
    return <OMG />;
  }
}

