import React from 'react';

class Tree extends React.Component {
  render() {
    const { workers } = this.props;
    return (
      <div>
        {workers.map(worker => (
          <ul>{worker.name}</ul>
        ))}
      </div>
    );
  }
}

export default Tree;
