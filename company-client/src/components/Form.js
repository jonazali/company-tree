import React from 'react';

class Form extends React.Component {
  render() {
    const { onHandleAdd } = this.props;

    return (
      <form
        name='myForm'
        onSubmit={event =>
          onHandleAdd(
            event,
            document.getElementById('name').value,
            document.getElementById('report').value
          )
        }
      >
        Name:
        <input type='text' name='name' id='name' />
        Report To:
        <input type='text' name='report' id='report' />
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
