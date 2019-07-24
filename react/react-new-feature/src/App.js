import React from 'react';
import logo from './logo.svg';
import './App.css';
import ConcurrentModeDemo from './ConcurrentMode/index'
import stateHook from './hook/stateHook'
import PrepareForEffectHook from './hook/prepareForEffectHook'
function App() {
  return (
    <div>
      {/* <ConcurrentModeDemo/> */}
      <stateHook/>
      <PrepareForEffectHook/>
    </div>
  );
}

export default App;
