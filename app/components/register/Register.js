import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      registerAllowed: true,
      step: 1,
      totalSteps: 3,
      user: {
        name: '',
        email: '',
        type: '',
        height: 0,
        hair: '',
        eyes: '',
        hobbies: []
      },
      newHobbie: '',
      error: false,
      errorMessage: '' 
    }

    this.registerUser = this.registerUser.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderFormContent = this.renderFormContent.bind(this)
    this.goToNext = this.goToNext.bind(this)
    this.goToPrevious = this.goToPrevious.bind(this)
    this.trackHobbies = this.trackHobbies.bind(this)
    this.updateHobbies = this.updateHobbies.bind(this)
    this.removeHobbie = this.removeHobbie.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      },
      error: false,
      errorMessage: ''
    })
  }

  formOne() {
    return (
      <Fragment>
        <label>
          Name:
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" onChange={this.handleChange} />
        </label>
        <label>
          Identity:
          <select name="type">
            <option>Boy</option>
            <option>Girl</option>
          </select>
        </label>
      </Fragment>  
    )
  }

  formTwo() {
    return (
      <Fragment>
        <label>
          Height:
          <input type="number" name="height" onChange={this.handleChange} />
        </label>
        <label>
          Hair:
          <select name="hair">
            <option>Blond</option>
            <option>Black</option>
            <option>Brown</option>
            <option>Multi</option>
          </select>
        </label>
        <label>
          Eyes:
          <select name="eyes">
            <option>Blue</option>
            <option>Green</option>
            <option>Brown</option>
            <option>Depends on the mood</option>
          </select>
        </label>
      </Fragment>
    )
  }

  trackHobbies(e) {
    this.setState({
      newHobbie: e.target.value
    })
  }

  updateHobbies(e) {
    if (e.keyCode === 13) {
      this.setState({
        user: {
         ...this.state.user,
         hobbies: [ ...this.state.user.hobbies, this.state.newHobbie]
        },
        newHobbie: '',
        error: false,
        errorMessage: ''
      })
      return
    }
  }

  removeHobbie(e) {
    const targetHobbie = e.target.name
    this.setState({
      user: {
        ...this.state.user,
        hobbies: this.state.user.hobbies.filter(hobbie => hobbie !== targetHobbie)
      }
    })
  }

  formThree() {
    const { hobbies } = this.state.user
    return (
      <Fragment>
        <label>
          Hobbies:
          <textarea 
            value={this.state.newHobbie} 
            placeholder="type and hit enter to add a hobby" 
            onChange={this.trackHobbies}
            onKeyDown={this.updateHobbies}
          />
        </label>
        {hobbies.length > 0 && 
          <div className="register-hobbies-container">
            { hobbies.map((hobbie, index) => {
               return (
                 <p className="register-hobbies-hobbie" key={`hobbie-${index}`}>
                   <button name={hobbie} onClick={this.removeHobbie}>X</button>
                   <span>{hobbie}</span>
                </p>)
            })}
          </div>
        }
      </Fragment>
    )
  }

  renderFormContent() {
    const { step } = this.state
    switch(step) {
      case 2:
        return this.formTwo()
      case 3: 
        return this.formThree()
      default: 
        return this.formOne()
    } 
  }

  goToNext() {
    const { step, totalSteps } = this.state
    const { name, email, height, hobbies } = this.state.user
    if ( step === totalSteps) {
      if (hobbies.length === 0) {
        this.setState({
          error: true,
          errorMessage: 'Please a couple of hobbies, so we could match you properly'
        })
        return
      } 
      return this.registerUser()
    }
    if (step === 1 && (name === '' || email === '')) {
      this.setState({
        error: true,
        errorMessage: 'Please fill in all the fields'
      })
      return
    }
    if (step === 2 && height === 0) {
      this.setState({
        error: true,
        errorMessage: 'Please fill in all the fields'
      })
      return
    }
    this.setState({
      step: step + 1
    })
  }

  goToPrevious() {
    const { step } = this.state
    this.setState({
      step: step - 1
    })
  }

  registerUser() {
    console.log('User Registered')
  }

  handleSubmit(e) {
    e.preventDefault()
    this.registerUser()
  }

  render () {
    const { step, totalSteps, error, errorMessage } = this.state
    return (
      <form className="register-form" onSubmit={this.handleSubmit}>
        {this.renderFormContent()}
        {error && 
          <div className="register-form-error-container">
            <p className="register-form-error-message">{errorMessage}</p>
          </div>
        }
        <div className="register-form-controls">
          <button 
            className={step > 1 ? 'active' : 'passive'} 
            onClick={this.goToPrevious}
            disabled={step > 1 ? false : true}
          >
            Previous
          </button>
          {step !== totalSteps &&
            <button 
              onClick={this.goToNext}
            >Next</button>
          }
          
          {!error && step === totalSteps && 
            <Link to={`/profiles`}>
              <button>Register</button>
            </Link>  
          }
        </div>
      </form> 
    )
  }
}

export default Register