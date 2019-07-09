import { createStore, applyMiddleware } from 'redux'
import thunkMiddleWare from 'redux-thunk'
import { createLogger } from 'redux-logger'

const middlewares = [
  thunkMiddleWare,
  createLogger()
];

export default function configStore () {
  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  return store;
}