import React, { Component } from 'react'
import './app.scss'

import { Content } from 'carbon-components-react/lib/components/UIShell'
import { Route, Switch } from 'react-router-dom'
import SfHeader from './components/SfHeader'
import LandingPage from './content/LandingPage'
import SetsPage from './content/SetsPage'

class App extends Component {
  render () {
    return (
      <>
        <SfHeader />
        <Content>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/sets' component={SetsPage} />
          </Switch>
        </Content>
      </>
    )
  }
}

export default App
