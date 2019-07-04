import React, { Component } from 'react';

class Player extends Component {
  render() {
    console.log('this.props',this.props)
    return (
      <div>
        player
      </div>
    );
  }
}

export default Player;