import './i18n'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import HelloWord from './components/HelloWord'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
})

const Index = () => {
  return (
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))
