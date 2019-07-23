import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReduxThunk from 'redux-thunk'
import App from './App';
import * as serviceWorker from './serviceWorker';

import  { createStore,combineReducers,applyMiddleware  } from 'redux'
// import  { createStore,combineReducers } from './redux/index'

function foo(state = 0, action) {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case 'DE':
      return state - 1;
    default:
      return state
  }
}
function bar(state = 'INIT', action) {
  switch (action.type) {
    case 'CHANGE':
      return action.content;
    default:
      return state
  }
}
const index = combineReducers({
  foo,
  bar
})
const store = createStore(index,applyMiddleware(ReduxThunk))
class Home extends React.Component{
  handleAdd = ()=>{
    store.dispatch({
      type: 'ADD'
    })
  }
  handleAddAsync = () => {
    const asyncAdd = (dispatch) => {
      setTimeout(() => {
        dispatch({
          type: 'ADD'
        })
      },1000)
    }
    store.dispatch(asyncAdd())
  }
  render() {
    const reduxStore = store.getState()
    return(
      <div>
        foo: { reduxStore.foo }
        bar: { reduxStore.bar }
        <button onClick={this.handleAdd}>+</button>
        <button onClick={this.handleAddAsync}>async add</button>
      </div>
    )
  }
}
ReactDOM.render(<Home />, document.getElementById('root'));
store.subscribe(()=>{
  ReactDOM.render(<Home />, document.getElementById('root'));
})