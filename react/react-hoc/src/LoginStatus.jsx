import React, { Component } from 'react';
import WithLogin from './WithLogin'

@WithLogin
class LoginStatus extends Component {
  render() {
    return (
      <div>
        <button>已经登录</button>
      </div>
    );
  }
}
LoginStatus.displayName = 'LoginStatus'
export default LoginStatus;