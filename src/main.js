import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const container = document.createElement('div');
container.id = 'yourwelcome';
document.body.appendChild(container);

ReactDOM.render(
  <App />,
  document.getElementById('yourwelcome')
);
