import * as ActionType from './actionTypes';

// 创建action
export function showplayer(showStatus) {
  return {
    type: ActionType.SHOW_PLAYER,showStatus
  }
}

export function changeSong(song) {
  return {
    type: ActionType.CHAGNE_SONG, song
  }
}

/**
 * dispatch({type:'',song:{}})
 * dispatch(changeSong(song))
 */