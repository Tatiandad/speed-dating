import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { setUserName } from '../actions'
import Welcome from './welcome/Welcome'
import Register from './register/Register'
import Profiles from './profiles/Profiles'

class App extends Component {
  componentDidMount () {
    this.props.setUserName('Tanya')
  }
  render () {
    return (
      <div className='app-container'>
        <header className='app-header'>
          <h3>Speed Dating</h3>
        </header>
        <Router>
          <Switch>
            <Route exact path="/" component={Welcome}></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/profiles" component={Profiles}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    nameAsProps: state.name
  }
}

const mapDispatchToProps = {
  setUserName
}

export default connect(mapStateToProps, mapDispatchToProps)(App)