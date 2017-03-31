import React from 'react'
import { render } from 'react-dom'
import App from './components/App/App'
import './index.css'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Provider } from 'react-redux'
import store from './store'

injectTapEventPlugin()

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
