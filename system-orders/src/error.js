import { PureComponent } from 'react'
import t from 'prop-types'
class ErrorBoundary extends PureComponent {
  state = { hasError: false }

  static getDerivedStateFromError (error) {
    console.log('error getDerivedStateFromError:', error.message)
    return { hasError: true }
  }

  componentDidCatch (error, info) {
    console.log('error:', error)
    console.log('info:', info.componentStack)
  }

  render () {
    return this.props.children(this.state.hasError)
  }
}

ErrorBoundary.propTypes = {
  children: t.func.isRequired
}

export default ErrorBoundary
