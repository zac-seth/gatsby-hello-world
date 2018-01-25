import React from 'react'

class Counter extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement() {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>current count: {this.state.count}</p>
        <button onClick={this.increment}>plus</button>
        <button onClick={this.decrement}>minus</button>
      </div>
    )
  }
}

export default Counter
