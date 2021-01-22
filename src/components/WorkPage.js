import React, { Component } from 'react'
import {Image, Card, CardDeck, Button, ButtonGroup, ButtonToolbar} from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'
import TicketAlert from '../images/work/ticketalert-screenshot.png'
import ChineseUrbanDictionary from '../images/work/cud-screenshot.jpg'
import GithubLogo from '../images/icons/GitHub-Mark-Light-64px.png'
import GithubLogoWord from '../images/icons/github-logo-white.png'

class WorkPage extends Component {
    componentDidMount() {
    }
    render() {
        return (
          <CardDeck>
            <Card className="work-card">
              <Card.Img variant="top" src={ChineseUrbanDictionary} />
              <Card.Header className="center-content">
                <ProjectButtonset
                  githubLink = "https://github.com/richardswei/chinese-urban-dictionary"
                  demoLink = "https://chinese-urban-dictionary.herokuapp.com"
                />
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
                <Card.Text><strong>Skills Used:</strong> Ruby on Rails, React, MySQL, Heroku, RESTful API Development</Card.Text>
              </Card.Footer>
            </Card>
            <Card className="work-card">
              <Card.Img variant="top" src={TicketAlert} />
              <Card.Header className="center-content">
                <ProjectButtonset
                  githubLink = "https://github.com/richardswei/ticket-alert"
                  demoLink = "https://seatgeek-ticket-alert.herokuapp.com"
                />
              </Card.Header>
              <Card.Body>
                <Card.Title>Ticket Alert</Card.Title>
                <Card.Text>
                  Ticket Alert is a web app that tracks secondhand ticket prices from SeatGeek. 
                  Registered users can follow events and receive emails when the lowest price 
                  for a ticket to followed events drop. Users can also view the recent price history of each event
                </Card.Text>
              </Card.Body>
              <Card.Footer className="center-content">
                <Card.Text><strong>Skills Used:</strong> Ruby on Rails, React, PostgreSQL, Heroku, Cron</Card.Text>
              </Card.Footer>


            </Card>
            
          </CardDeck>
        )
    }
}
 
export default WorkPage

function ProjectButtonset(props) {
  const githubLink = props.githubLink;
  const demoLink = props.demoLink;
  return (
    <ButtonToolbar>
      <ButtonGroup>
        <Button variant='outline-primary' target="_blank" href={demoLink}>See Demo</Button>
        <Button variant='primary' target="_blank" href={githubLink}>
          <Image className="github-logo" src={GithubLogo}></Image>
          <Image className="github-logo" src={GithubLogoWord}></Image>
        </Button>
      </ButtonGroup>
    </ButtonToolbar>
  )
}