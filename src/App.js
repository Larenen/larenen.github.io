import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Portfolio from './Pages/Portfolio';
import About from './Pages/About';
import ProjectView from './Pages/ProjectView';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navigation/>
      <Switch>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/project/:id">
            <ProjectView/>
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
