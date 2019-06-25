const { combineReducers } = require('redux')
const flimReducer = require('./flimReducer.js')
const flimFilterReducer = require('./flimFilter.js')

module.exports = combineReducers({
  flims: flimReducer,
  filter: flimFilterReducer
})