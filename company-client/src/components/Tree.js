import React from 'react';

class Tree extends React.Component {
  render() {
    const { workers, report } = this.props;
    return (
      <ul>
        {workers
          .filter(worker => worker.report === report)
          .map(worker => (
            <li>
              {worker.name}
              <Tree workers={workers} report={worker.name} />
            </li>
          ))}
      </ul>
    );
  }
}

export default Tree;
