import React, { useState } from 'react'
import { connect } from 'react-redux'
import { signUpStart } from '../../redux/user/userActions'
import Button from '../common/button'
import FormInput from '../common/formInput'
import './styles.scss'

const SignUp = ({ signUpStart }: any) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const { displayName, email, password, confirmPassword } = userCredentials

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert("passwords don't match")
      return
    }

    signUpStart({ displayName, email, password })
  }

  const handleChange = (event: any) => {
    const { name, value } = event.target

    setUserCredentials({ ...userCredentials, [name]: value })
  }

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have a account</h2>
      <span>Sign up with your email and password</span>

      <form className='signup-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          label='Display Name'
          value={displayName}
          onChange={handleChange}
          required
        />
        <FormInput
          type='email'
          name='email'
          label='Email'
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          type='password'
          name='password'
          label='Password'
          value={password}
          onChange={handleChange}
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          label='Confirm Password'
          value={confirmPassword}
          onChange={handleChange}
          required
        />
        <Button type='submit'>SIGN UP</Button>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch: any) => ({
  signUpStart: (userCredentials: any) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp)
