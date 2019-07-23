import React, { Component } from 'react';
import { Provider } from './context'
class EnhancedProvider extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider value={}>

      </Provider>
    );
  }
}

export default EnhancedProvider;