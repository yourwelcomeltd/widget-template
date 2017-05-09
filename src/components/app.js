import React, { Component } from 'react';
import { H } from './';

const _compose = (f, g) => x => g(f(x)); // eslint-disable-line

export default class App extends Component {
  componentDidMount() {
    const ph = document.body.querySelectorAll('#yourwelcomewidget');
    const root = document.querySelectorAll('#yourwelcome')[0];
    if (ph.length !== 0) {
      ph[0].appendChild(root);
    }
  }

  render() {
    return (
      <div style={{ background: 'green' }}>
        <H />
      </div>
    );
  }
}
