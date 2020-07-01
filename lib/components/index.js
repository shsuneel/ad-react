import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

  constructor() {
    super();
    this.state = {
      owner: 'Suneel Sharma',
    };
  }

  render() {
    return (
      <h1>{this.state.owner}</h1>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);