import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import SkillsPage from './pages/SkillsPage';



function App() {
  return (
    <Router>
      <Switch>
        <Route path='/:id'>
          <Header />
          <SkillsPage />
        </Route>
        <Route path='/'>
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
