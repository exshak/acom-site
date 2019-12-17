import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import { IndexPage } from './pages/index'
import { ShopPage } from './pages/shop'

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={IndexPage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  )
}

export default App
