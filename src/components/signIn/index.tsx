import React from 'react'
import Button from '../common/button'
import FormInput from '../common/formInput'
import './styles.scss'

type Props = {
  props?: any
}

type State = {
  email: String
  password: String
}

class SignIn extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (event: any) => {
    event.preventDefault()

    this.setState({ email: '', password: '' })
  }

  handleChange = (event: any) => {
    const { value, name } = event.target
    // @ts-ignore FIXME:
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
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
          <Button type='submit'> Sign in </Button>
        </form>
      </div>
    )
  }
}

export default SignIn
