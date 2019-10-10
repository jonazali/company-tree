import React, { Component } from 'react';
import Form from './Form';
import Tree from './Tree';

import '../css/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workers: [],
      report: ''
    };
  }

  handleAdd = (event, name, report) => {
    event.preventDefault();

    this.setState(prevState => ({
      workers: [
        ...prevState.workers,
        {
          name: name,
          report: report
        }
      ]
    }));
  };

  render() {
    return (
      <div className='App'>
        <Form onHandleAdd={this.handleAdd} />
        <Tree workers={this.state.workers} report={this.state.report} />
      </div>
    );
  }
}

export default App;
