import React from 'react';

export default class NoUseHookCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  modify = (n) => {
    this.setState({ 
      count: n 
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.modify(this.state.count + 1)}>
          No hook Count is {this.state.count}
        </button>
      </div>
    );
  }
}
