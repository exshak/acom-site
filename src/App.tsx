import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import './App.css'
import Header from './components/header'
import CheckoutPage from './pages/checkout'
import { HomePage } from './pages/index'
import ShopPage from './pages/shop'
import { SignInSignUpPage } from './pages/signin'
import { checkUserSession } from './redux/user/userActions'
import { selectCurrentUser } from './redux/user/userSelectors'

const App = ({ checkUserSession, currentUser }: any) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route
          exact
          path='/signin'
          render={() =>
            currentUser ? <Redirect to='/' /> : <SignInSignUpPage />
          }
        />
      </Switch>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch: any) => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
