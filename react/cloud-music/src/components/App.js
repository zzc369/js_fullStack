import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
  Redirect, NavLink
} from 'react-router-dom'
import Recommend from './recommend/Recommend'
import Ranking from './ranking/Ranking'
import Search from './search/Search'
import './App.styl';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <span>Cloud Music</span>
        </header>
        <div className="music-tab">
          <div className="tab-item">
            <NavLink to="/recommend" className="nav-link">
              <span>推荐音乐</span>
            </NavLink>
          </div>
          <div className="tab-item">
            <NavLink to="/ranking" className="nav-link">
              <span>排行榜</span>
            </NavLink>
          </div>
          <div className="tab-item">
            <NavLink to="/search" className="nav-link">
              <span>搜索</span>
            </NavLink>
          </div>
        </div>
        <div className="music-view">
          <Switch>
            <Route path='/recommend' component={Recommend} />
            <Route path='/ranking' component={Ranking} />
            <Route path='/search' component={Search} />
            <Redirect from='/' to='/recommend' />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
