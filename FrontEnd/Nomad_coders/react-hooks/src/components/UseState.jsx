import React, { useState } from 'react'


// using useState
function UseState() {
  const [item, setItem] = useState('')   //  리턴값은 Array,  [item, setItem] -> 구조분해할당으로 입력 받음

  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  return (
    <div>
      <h1>Hello {item}</h1>
      <button onClick={incrementItem}>Increment</button> 
      <button onClick={decrementItem}>Decrement</button>
    </div>
  )
};

// using setState
class AppUgly extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
    }
  }

  incrementItem = () => this.setState({ 
    item: this.state.item + 1 
  });

  decrementItem = () => this.setState({ 
    item: this.state.item - 1 
  });

  render() {
    return (
      <>
        <h1>Hello {this.state.item}</h1>
        <button onClick={this.incrementItem}>Increment</button> 
        <button onClick={this.decrementItem}>Decrement</button>
      </>
    )
  }
};

export default UseState
export { AppUgly }
