import React from 'react'
import SignIn from '../components/signIn'
import SignUp from '../components/signUp'
import './styles.scss'

export const SignInSignUpPage = () => (
  <div className='signin-signup'>
    <SignIn />
    <SignUp />
  </div>
)
