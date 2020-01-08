import React, { lazy, Suspense, useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import './App.css'
import ErrorBoundary from './components/common/errorBoundary'
import Spinner from './components/common/spinner'
import Header from './components/header'
import { checkUserSession } from './redux/user/userActions'
import { selectCurrentUser } from './redux/user/userSelectors'

const HomePage = lazy(() => import('../src/pages/index'))
const ShopPage = lazy(() => import('../src/pages/shop'))
const SignInSignUpPage = lazy(() => import('../src/pages/signin'))
const CheckoutPage = lazy(() => import('../src/pages/checkout'))
const ContactPage = lazy(() => import('../src/pages/contact'))

const App = ({ checkUserSession, currentUser }: any) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/contact' component={ContactPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route
              exact
              path='/signin'
              render={() =>
                currentUser ? <Redirect to='/' /> : <SignInSignUpPage />
              }
            />
          </Suspense>
        </ErrorBoundary>
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
