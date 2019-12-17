import React from 'react'
import './styles.scss'

const Button = ({ children, isGoogleSignIn, ...otherProps }: any) => (
  <button
    className={`${isGoogleSignIn ? 'google-signin' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
)

export default Button
