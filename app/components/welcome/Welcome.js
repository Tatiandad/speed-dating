import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      registrationOpen: true
    }
  }

  componentDidMount () {
    // Check if the registration is open if not change the state
    /*
    this.setState({
      registrationOpen: false
    })
    */
  }

  render () {
    const { registrationOpen } = this.state
    return (
      <div className="welcome-container">
        <h3>Welcome messsage to boys and girls</h3>
        <div>Venue details and dates</div>
        <div>What to expect</div>
        {registrationOpen && 
          <Link to={`/register`}
          >
            <button type="button">Go to Registration</button>
          </Link>
        }
      </div>
    )
  }
}

export default Welcome