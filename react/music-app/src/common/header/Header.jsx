import React, { Component } from 'react';
import './header.styl'
class Header extends Component {
  handleback = () => {
    // if (this.props.history) {
    //   this.props.history.pop();
    // }
    // <Route path="*" component> 只有通过这种方式跳转页面的 在this.props.history上有记录
    window.history.back()
  }
  render() {
    return (
      <div className="music-header">
        <span className="header-back" onClick={this.handleback}>
          <i className="icon-back"></i>
        </span>
        <div className="header-title">
          { this.props.title }
        </div>
      </div>
    );
  }
}

export default Header;