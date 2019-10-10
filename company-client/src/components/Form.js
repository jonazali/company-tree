import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      report: ''
    };
  }

  handleChange = event => {
    let name = event.target.name;
    // track the changes made to form
    // update state during changes
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { onHandleAdd } = this.props;

    return (
      <form
        name='myForm'
        onSubmit={event => {
          if (this.state.name === this.state.report) {
            alert('Error cannot use the same name');
          } else onHandleAdd(event, this.state.name, this.state.report);
        }}
      >
        Name:
        <input
          type='text'
          name='name'
          id='name'
          value={this.state.name}
          onChange={this.handleChange}
        />
        Report To:
        <input
          type='text'
          name='report'
          id='report'
          value={this.state.report}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
