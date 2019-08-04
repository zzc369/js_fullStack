import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.styl';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          Cloud Music
        </header>
      </div>
    </Router>
  );
}

export default App;
