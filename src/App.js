import React from 'react';
import './App.css';
import 'bootswatch/dist/lux/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
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
      <div className="my-auto">
        <Navigation/>
        <Container className='mainPanel'>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/artwork">
              <Art />
            </Route>
            <Route path="/programming">
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
  return (
    <Container>
      <Row>
        <Col xs={{order: 1}} sm={{ span: 6, order: 1 }} md={{ span: 4, order: 0 }} className="my-auto">
          <Link to="/artwork">
            <h3 className="text-center">artwork</h3>
          </Link>
        </Col>
        <Col md={{ span: 4, order: 4 }}>
          <Link to="/about">
            <Image className="scaled-image" src="./portrait2_square.jpg" rounded></Image>
          </Link>
        </Col>
        <Col xs={{order: 12}} md={4} sm={{ span: 6, order: 12 }} className="my-auto">
          <Link to="/programming">
            <h3 className="text-center">programming</h3>
          </Link>
        </Col>
      </Row>
      <Row>
        
      </Row>
    </Container>
  )

}

function About() {
  return <h2>About</h2>;
}

function Art() {
  return (
    <div>
      <h2>Artwork</h2>
      <ArtPage/>
    </div>
  )
}

function Work() {
  return (
    <div>
      <h2>Programming</h2>
      <WorkPage/>
    </div>
  )
}