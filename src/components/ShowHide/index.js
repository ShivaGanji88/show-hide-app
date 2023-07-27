// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstNameButton: false, lastNameButton: false}

  onFirstNameButton = () => {
    this.setState(prevState => ({firstNameButton: !prevState.firstNameButton}))
  }

  onSecondNameButton = () => {
    this.setState(prevState => ({lastNameButton: !prevState.lastNameButton}))
  }

  render() {
    const {firstNameButton, lastNameButton} = this.state

    return (
      <div className="first-container">
        <h1>Show/Hide</h1>
        <div className="middle-container">
          <div className="second-container">
            <button
              type="button"
              className="button-one"
              onClick={this.onFirstNameButton}
            >
              Show/Hide Firstname
            </button>
            {firstNameButton && <p className="para">Joe</p>}
          </div>
          <div className="second-container">
            <button
              type="button"
              className="button-one"
              onClick={this.onSecondNameButton}
            >
              Show/Hide Lastname
            </button>
            {lastNameButton && <p className="para">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
