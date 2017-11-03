import React from 'react'
import { Provider } from 'react-redux'

import buildStore from '../store'
import Routes from '../modules/Routes'

const App = () => (
  <Provider store={buildStore()}>
    <Routes />
  </Provider>
)

export default App
