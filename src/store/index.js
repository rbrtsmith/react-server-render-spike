import { createStore, combineReducers } from 'redux'

const test = (state = false) => state
const hello = (state = 'test') => state

const rootReducer = combineReducers({
  test,
  hello
})

const buildStore = (initialState) =>  
  createStore(rootReducer, initialState)

export default buildStore
