import React from 'react'
import './styles.scss'

const Spinner = (WrappedComponent: any) => {
  const Spinner = ({ isLoading, ...otherProps }: any) => {
    return isLoading ? (
      <div className='spinner-overlay'>
        <div className='spinner-container' />
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    )
  }
  return Spinner
}

export default Spinner
