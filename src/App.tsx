import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import { IndexPage } from './pages/index'

const App: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={IndexPage} />
      </Switch>
    </div>
  )
}

export default App
