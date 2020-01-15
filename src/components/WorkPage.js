import React, { Component } from 'react'
import {Card, CardDeck} from 'react-bootstrap'
import { Link } from 'react-router-dom'

class WorkPage extends Component {
    componentDidMount() {
    }
    render() {
        return (
          <CardDeck>
            <Card as='a' target="_blank" href="https://chinese-urban-dictionary.herokuapp.com">
              <Card.Img variant="top" src="./cud_screenshot.JPG" />
              <Card.Body>
                <Card.Title>Chang's Slang - The Chinese Urban Dictionary</Card.Title>
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
    }
}
 
export default WorkPage