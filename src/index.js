import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { createGlobalStyle } from 'styled-components'
import App from './App'
import { Provider } from 'react-redux'
import store from './ducks/store'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f6f7ff;
    margin: 0px;
    -webkit-font-smoothing: antialiased !important;
    font-family: Source Sans Pro;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
