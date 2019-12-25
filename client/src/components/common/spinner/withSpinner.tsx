import React from 'react'
import Spinner from './index'

const WithSpinner = (WrappedComponent: any) => ({
  isLoading,
  ...otherProps
}: any) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />
}

export default WithSpinner
