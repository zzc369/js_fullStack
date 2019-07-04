import * as Actiontype from './actionTypes'
import { combineReducers } from 'redux'
const initialState = {
  showStatus: false,
  song: {},//当前播放的歌曲
  songs: []   //播放列表
}
/**
 * { type: 'SHOW_PLAYER',showStatus: true}
 * 
 */
function showStatus(showStatus = initialState.showStatus,action) {
  switch(action.type) {
    case Actiontype.SHOW_PLAYER:
      return action.showStatus;
    default:
      return showStatus
  }
}
/**
 * { type: 'CHANGE_SONG', song:{}}
 * type
 * payload
 */
function song(song = initialState.song, action) {
  switch(action.type) {
    case Actiontype.CHAGNE_SONG:
      return action.song;
    default:
      return song
  }
}

export default combineReducers({
  showStatus,
  song
})