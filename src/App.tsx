import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import { auth, createUserProfileDocument } from './firebase/utils'
import { HomePage } from './pages/index'
import { ShopPage } from './pages/shop'
import { SignInSignUpPage } from './pages/signin'
import { setCurrentUser } from './redux/user/userActions'

type Props = {
  setCurrentUser: any
  currentUser: Object | null
}

type State = {}

class App extends React.Component<Props, State> {
  unsubscribeFromAuth: any | null = null

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef: any | undefined = await createUserProfileDocument(
          userAuth
        )

        userRef.onSnapshot((snapShot: any) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = ({ user }: any) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentUser: (user: any) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
