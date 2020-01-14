import React from 'react';
import './App.css';
import 'bootswatch/dist/lux/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navigation from 'components/Navigation';
import WorkPage from 'components/WorkPage';
import ArtPage from 'components/ArtPage';

export default function App() {
  return (
    <Router>
      <div>
        <Navigation/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Container className='mainPanel'>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/art">
              <Art />
            </Route>
            <Route path="/work">
              <Work />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Art() {
  return (
    <div>
      <h2>Art</h2>
      <ArtPage/>
    </div>
  )
}

function Work() {
  return (
    <div>
      <h2>Work</h2>
      <WorkPage/>
    </div>
  )
}