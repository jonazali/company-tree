import React, { Component } from 'react';
import Form from './Form';
import Tree from './Tree';

import '../css/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workers: [],
      person: {
        name: '',
        report: ''
      }
    };
  }

  handleAdd = (event, name, report) => {
    event.preventDefault();
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        name: name,
        report: report
      }
    }));

    this.setState(prevState => ({
      workers: [...prevState.workers, this.state.person]
    }));
  };

  render() {
    return (
      <div className='App'>
        <Form onHandleAdd={this.handleAdd} />
        <Tree />
      </div>
    );
  }
}

export default App;
