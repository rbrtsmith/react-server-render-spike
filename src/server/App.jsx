import React from 'react'
import { Provider } from 'react-redux'

import buildStore from '../store'
import Routes from './Routes'

const store = buildStore()

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

export default App
