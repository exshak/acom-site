import React from 'react'
import './styles.scss'

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}: any) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-signin' : ''
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
)

export default CustomButton
