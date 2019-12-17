import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import { IndexPage } from './pages/index'
import { ShopPage } from './pages/shop'
import { SignInPage } from './pages/signin'

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={IndexPage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInPage} />
      </Switch>
    </div>
  )
}

export default App
