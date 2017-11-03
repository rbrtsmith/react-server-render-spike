import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

const test = (state = false) => state
const hello = (state = 'test') => state


const rootReducer = combineReducers({
  test,
  hello
})

const middleware = []



const composeEnhancers =
  typeof (window) !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
)

const buildStore = initialState =>  
  createStore(rootReducer, initialState, enhancer)

export default buildStore
