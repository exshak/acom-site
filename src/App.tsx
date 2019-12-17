import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import { HomePage } from './pages/index'
import { ShopPage } from './pages/shop'
import { SignInSignUpPage } from './pages/signin'

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInSignUpPage} />
      </Switch>
    </div>
  )
}

export default App
