import React, { Component } from 'react'
import {Container, Row, Col, Image, Button, ButtonToolbar} from 'react-bootstrap'
import pdf from '../docs/richard_wei_resume.pdf'
import './AboutPage.css';
import headshot from '../images/self/headshot_square.jpg'
// import { Link } from 'react-router-dom'

class AboutPage extends Component {
    render() {
        return (
        <Container>
            <Row>	
                <Col lg={5}>
                    <Column1/>
                </Col>
                <Col lg={{span:6, offset:1}}>
                    <Column2/>
                </Col>
            </Row>
        </Container>
        )
    }
}

export default AboutPage

function Column1() {
    return(
        <div>   
            <h1>Richard Wei</h1>
            <Image className="scaled-image" src={headshot} rounded ></Image>
            <Container>
                <Row>
                    <ButtonToolbar className="centered">
                        <Button variant="primary" target="_blank" href="https://github.com/richardswei">GitHub</Button>
                        <Button variant="primary" target="_blank" href="https://www.linkedin.com/in/richardsamuelwei/">LinkedIn</Button>
                        <Button variant="primary" target="_blank" href={pdf} target="_blank">Resume</Button>
                    </ButtonToolbar>
                </Row>
                
            </Container>
        </div>
    )
}
function Column2() {
    return(
        <Container>
            <Row>
                <h3>About</h3>
            </Row>
            <Row>
                <p>
                    Apr 2020 – Present | Software Engineer I, HealthTrio 
                </p>
                <p>
                    Jan 2019 – Aug 2019 | Teacher/Tutor, Stepping Stones to Learning 
                </p>
                <p>
                    July 2016 – Oct 2018 | Analyst/Developer, Enrich Consulting
                </p>
            </Row>
            <Row>
                <h4>Contact Me</h4>
            </Row>
            <Row>
                <p>If you have any opportunities or projects you would like to work together on, feel free to reach out at <strong>wei.richard.s@gmail.com</strong></p>
            </Row>
        </Container>
    )
}
