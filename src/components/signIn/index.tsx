import React from 'react'
import { auth, signInWithGoogle } from '../../firebase/utils'
import Button from '../common/button'
import FormInput from '../common/formInput'
import './styles.scss'

type Props = {
  props?: any
}

type State = {
  email: string
  password: string
}

class SignIn extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async (event: any) => {
    event.preventDefault()

    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: '', password: '' })
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = (event: any) => {
    const { value, name } = event.target
    // @ts-ignore FIXME:
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className='buttons'>
            <Button type='submit'> Sign in </Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
