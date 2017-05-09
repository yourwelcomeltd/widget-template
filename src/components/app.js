import React, { Component } from 'react';
import counterpart from 'counterpart';
import translations from '../translations';
import { H } from './';

const _compose = (f, g) => x => g(f(x)); // eslint-disable-line

export default class App extends Component {
  componentWillMount() {
    const language = 'en';
    counterpart.registerTranslations(language, translations[language]);
    counterpart.setLocale(language);
  }

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
