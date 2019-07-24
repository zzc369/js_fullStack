import React, { Component } from 'react';

class Index extends Component {
  state= {
    count: 0,
    size: {
      width: document.documentElement.clentWidth,
      height: document.documentElement.clentHeight,
    }
  }
  componentDidMount() {
    document.title = this.state.count;
  }
  render() {
    const { count,size } = this.state
    return (
      <button onClick={()=>{
        this.setState({
          count: count + 1
        })
      }}>
        click: {count}
        size: {size.width} X {size.height}
      </button>
    );
  }
}

export default Index;