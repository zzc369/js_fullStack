import React, { Component } from 'react';
import { getCarousel } from '../../api/recommend'
class Recommend extends Component {
  componentDidMount() {
    getCarousel().then(res => {
      console.log(res)
    })
  }
  render() {
    return (
      <div>
        Recommend
      </div>
    );
  }
}

export default Recommend;