import React from 'react'
import { Provider } from 'react-redux'

import Routes from './Routes'
import buildStore from '../store'

const store = buildStore(window.__initialState__)

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

export default App
