import React, { Component } from 'react'
import {Card, CardDeck, Jumbotron} from 'react-bootstrap'
// import { Link } from 'react-router-dom'

class ArtPage extends Component {
    componentDidMount() {
    }
    render() {
        return (
          <Jumbotron><h5>Coming Soon</h5></Jumbotron>
        )
    }
}
 
export default ArtPage
/*
function ArtCards(props){
  return (
    <CardDeck>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to additional
            content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardDeck>
  )
} */