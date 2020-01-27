import React, { Component } from 'react'
import {Image, Card, CardDeck, Button, ButtonGroup, ButtonToolbar} from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'

class WorkPage extends Component {
    componentDidMount() {
    }
    render() {
        return (
          <CardDeck>
            <Card className="work-card">
              <Card.Img variant="top" src="./work/cud_screenshot.JPG" />
              <Card.Header className="center-content">
                <ButtonToolbar>
                  <ButtonGroup>
                    <Button variant='outline-primary' target="_blank" href="https://chinese-urban-dictionary.herokuapp.com">See Demo</Button>
                    <Button variant='primary' target="_blank" href="https://github.com/richardswei/chinese-urban-dictionary">
                      <Image className="github-logo" src="/icons/GitHub-Mark-Light-64px.png"></Image>
                      <Image className="github-logo" src="/icons/github-logo-white.png"></Image>
                    </Button>
                  </ButtonGroup>
                </ButtonToolbar>
              </Card.Header>
              <Card.Body>
                <Card.Title>Chang's Slang - The Chinese Urban Dictionary</Card.Title>
                <Card.Text>
                  A community-centered web app that helps English speakers learn Mandarin 
                  Chinese slangs and idioms. Registered users can improve the community by 
                  submitting new phrases or by adding alternate definitions to existing phrases.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="center-content">
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card className="work-card">
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Header className="center-content">
                <ButtonToolbar>
                  <ButtonGroup>
                    <Button variant='outline-primary' target="_blank" href="https://chinese-urban-dictionary.herokuapp.com">See Demo</Button>
                    <Button variant='primary' target="_blank" href="https://github.com/richardswei/chinese-urban-dictionary">
                      <Image className="github-logo" src="/icons/GitHub-Mark-Light-64px.png"></Image>
                      <Image className="github-logo" src="/icons/github-logo-white.png"></Image>
                    </Button>
                  </ButtonGroup>
                </ButtonToolbar>
              </Card.Header>
              <Card.Body>
                <Card.Title>Ticket Alert</Card.Title>
                <Card.Text>
                  Description of the project
                </Card.Text>
              </Card.Body>
              <Card.Footer className="center-content">
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>


            </Card>
            
          </CardDeck>
        )
    }
}
 
export default WorkPage