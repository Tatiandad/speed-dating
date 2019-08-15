import React, { Component } from 'react'

class Profiles extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: []
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  renderProfiles() {
    const profiles = [
      'Amy Winehouse',
      'Celine Dion',
      'Rihanna',
      'Katy Perry',
      'Lady Gaga',
      'Beyoncé',
      'Whitney Houston',
      'Madonna'
    ]

    const { selected } = this.state

    const options = profiles.map(profile => {
      return (
        <label key={profile}>
          {profile}
          <input type='checkbox' checked={selected.indexOf(profile) !== -1} multiple={true} name={profile} onChange={this.handleInputChange} />
        </label>
      )
    })
    return options
  }

  renderSelected() {
    const { selected } = this.state
    return (
      selected.map((girl, index) => {
        const imgUrl = require(`../../assets/girl-${index+1}.png`)
        return (
          <figure key={girl}>
            <img src={imgUrl} alt="Trulli" />
            <figcaption>{girl}</figcaption>
          </figure>
        )
      })
    )
  }

  handleInputChange(e) {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const { selected } = this.state
    if (selected.indexOf(e.target.name) === -1 && value) {
      return this.setState({
        selected: [...selected, e.target.name]
      })
    }

    if (!value) {
      return this.setState({
        selected: selected.filter(selected => selected !== e.target.name)
      })
    }
  }

  render() {
    const { selected } = this.state
    return (
      <div className="profiles-container">
        <div className="profiles-profiles">
          {this.renderProfiles()}
        </div>
        { selected.length > 0 && 
          <div className="profiles-selected-container">
            <h5>You really like these girls:</h5>
            {this.renderSelected()}
          </div>
        }
      </div>
    )
  }
}

export default Profiles