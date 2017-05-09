import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

let container = document.createElement('div')
container.id = 'yourwelcome'
document.body.appendChild(container)

ReactDOM.render(
  <App />,
  document.getElementById('yourwelcome')
)