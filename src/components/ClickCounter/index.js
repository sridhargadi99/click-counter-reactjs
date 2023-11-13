// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  incrementButton = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">
            The Button has been clicked
            <span className="count-style"> {count}</span> times
          </h1>
          <p className="paragraph">Click the button to increase the count!</p>
          <button
            className="button-style"
            type="button"
            onClick={this.incrementButton}
          >
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
