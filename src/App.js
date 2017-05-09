import React from 'react'
import ReactDOM from 'react-dom'
import 'whatwg-fetch'

const _compose = (f,g) => (x) => g(f(x))

class App extends React.Component {
  componentDidMount() {
    let ph = document.body.querySelectorAll('#yourwelcomewidget')
    let root = document.querySelectorAll('#yourwelcome')[0]
    if (ph.length !== 0) ph[0].appendChild(root)
  }

  render() {
    return (
      <div style={{ background: 'green' }}>
        <h1>Welcome to your welcome </h1>
      </div>
    )
  }
}

export default App
