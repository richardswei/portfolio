import React from 'react';
import './App.css';
import 'bootswatch/dist/lux/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navigation from 'components/Navigation';
import WorkPage from 'components/WorkPage';
import ArtPage from 'components/ArtPage';
import AboutPage from 'components/AboutPage';
import portrait from './images/self/portrait2_square_bw.jpg'

export default function App() {
  return (
    <Router>
      <div className="my-auto">
        <Container className='mainPanel'>
          <Navigation/>
          <Container>
            <Switch>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/artwork">
                <Art />
              </Route>
              <Route exact path="/programming">
                <Work />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </Container>
        </Container>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <Container>
      <Row>
        <Col xs={{order: 1}} sm={{ span: 6, order: 1 }} lg={{ span: 4, order: 0 }} className="my-auto">
          <Link  to="/artwork">
            <h2 className="big-link text-center">artwork</h2>
          </Link>
        </Col>
        <Col lg={{ span: 4, order: 4 }}>
          <Link to="/about">
            <Image className="scaled-image portrait" src={portrait} rounded></Image>
          </Link>
        </Col>
        <Col xs={{order: 12}} lg={4} sm={{ span: 6, order: 12 }} className="my-auto">
          <Link  to="/programming">
            <h2 className="big-link text-center">programming</h2>
          </Link>
        </Col>
      </Row>
      <Row>
        
      </Row>
    </Container>
  )

}

function About() {
  return( 
    <div>
      <AboutPage/>
    </div>
  )
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