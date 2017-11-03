import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'

import rootReducer from '../store/reducers'

const buildStore = (history, initialState) => {
  const middleware = [
    routerMiddleware(history)
  ]

  const composeEnhancers =
    typeof (window) !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const enhancer = composeEnhancers(
    applyMiddleware(...middleware)
  )

  return createStore(rootReducer, initialState, enhancer)
}

export default buildStore
