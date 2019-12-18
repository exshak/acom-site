import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import { auth, createUserProfileDocument } from './firebase/utils'
import { HomePage } from './pages/index'
import { ShopPage } from './pages/shop'
import { SignInSignUpPage } from './pages/signin'

type Props = {
  props?: any
}

type State = {
  currentUser: Object | null
}

class App extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth: any | null = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef: any | undefined = await createUserProfileDocument(
          userAuth
        )

        userRef.onSnapshot((snapShot: any) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      } else {
        this.setState({ currentUser: userAuth })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUpPage} />
        </Switch>
      </div>
    )
  }
}

export default App
