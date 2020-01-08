import React from 'react'
import './styles.scss'

type Props = {}

type State = {
  hasErrored: boolean
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      hasErrored: false
    }
  }

  static getDerivedStateFromError(error: any) {
    // process the error
    return { hasErrored: true }
  }

  componentDidCatch(error: any, info: any) {
    console.log(error)
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <div className='image-overlay'>
          <div className='image-container' />
          <h2>Sorry this page is broken</h2>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
