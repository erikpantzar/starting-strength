import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'

// TODO: this test may eventually cause side effects (network requests)
// when rendering the whole app, these need to be mocked
it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})
