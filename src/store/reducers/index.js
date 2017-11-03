import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const test = (state = false) => state
const hello = (state = 'test') => state

const root = combineReducers({
  test,
  hello,
  router: routerReducer
})

export default root
