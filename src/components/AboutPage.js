import React, { Component } from 'react'
import {Container, Row, Col, Image, Button} from 'react-bootstrap'
import pdf from '../docs/richard_wei_resume.pdf'
import './AboutPage.css';
// import { Link } from 'react-router-dom'

class AboutPage extends Component {
    render() {
        return (
        <Container>
            <Row>	
                <Col lg={4}>
                    <Column1/>
                </Col>
                <Col lg={{span:6, offset:2}}>
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
            <Image className="scaled-image portrait" src="headshot_square.jpg" rounded ></Image>
            <Container>
                <Row>
                    <h3>Contact Me</h3>
                    <p>If you have any opportunities or projects you would like to work together on, feel free to reach out at <strong>wei.richard.s@gmail.com</strong></p>
                </Row>
                <Row>
                    <Button variant="primary" href="">LinkedIn</Button>
                    <Button variant="primary" href="https://github.com/richardswei">GitHub</Button>
                    <Button variant="primary" href={pdf} target="_blank">Resume</Button>
                </Row>
            </Container>
        </div>
    )
}
function Column2() {
    return(
        <div>   
            <h1>About</h1>
            <p>
                Jan 2019 – Aug 2019 | Teacher Tutor, Stepping Stones to Learning 
            </p>
            <p>
                July 2016 – Oct 2018 | Analyst/Developer, Enrich Consulting
            </p>
            <h2>Example body text</h2>
            <p>Nullam quis risus eget <a href="#">urna mollis ornare</a> vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
            <p><small>This line of text is meant to be treated as fine print.</small></p>
            <p>The following is <strong>rendered as bold text</strong>.</p>
            <p>The following is <em>rendered as italicized text</em>.</p>
            <p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>
        </div>
    )
}
