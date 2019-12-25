import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
  emailSignInStart,
  googleSignInStart
} from '../../redux/user/userActions'
import Button from '../common/button'
import FormInput from '../common/formInput'
import './styles.scss'

const SignIn = ({ emailSignInStart, googleSignInStart }: any) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const { email, password } = userCredentials

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    emailSignInStart(email, password)
  }

  const handleChange = (event: any) => {
    const { value, name } = event.target

    setCredentials({ ...userCredentials, [name]: value })
  }

  return (
    <div className='sign-in'>
      <h2 className='title'>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='password'
          required
        />
        <div className='buttons'>
          <Button type='submit'> Sign in </Button>
          <Button onClick={googleSignInStart} isGoogleSignIn>
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch: any) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email: any, password: any) =>
    dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn)
