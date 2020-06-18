import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "./aboutArea.css";

export class AboutArea extends Component {
    render() {
        return (
            <div className="about-area content-section">
                <Container>
                <div className="sectionTitle">
                        <h2>
                        About Me
                        </h2>
                        <span>About Me</span>
                    </div>
                    <Row>
                        <Col lg="6">
                            <div className="aboutImg">
                                <img src="https://picsum.photos/200/300" alt="Random" />
                            </div>
                            <a className="btnStyle" href="/">Download CV</a>
                        </Col>
                        <Col lg="6">
                            <div className="about-content">
                                <h3>Hey guys! My name's <span class="color-theme">Calvin Donaldson</span></h3>

                                <p> 
                                     I'm a web developer from the UK.
                                    Please take a moment to thumb through my projects and their associated 
                                    repositories. You will find well-documented, thoughtful code demonstrating 
                                    an aptitude for development and a hunger for continuous improvement.
                                    I have always been a very logical person, methodical and well organized, 
                                    with a talent for problem solving and a high attention to detail.
                                    Always interested in learning, growing, and contributing to awesome projects!
                                    </p>                           
                                <ul>
                                <li>
                                    <b>Full Name</b>
                                    Calvin Donaldson
                                </li>
                                <li>
                                    <b>Age</b>
                                    22
                                </li>
                                <li>
                                    <b>Nationality</b>
                                    Scottish
                                </li>
                                <li>
                                    <b>Lorem</b>
                                    Lorem, ipsum.
                                </li>
                                <li>
                                    <b>Lorem</b>
                                    Lorem, ipsum.
                                </li>
                                <li>
                                    <b>Freelance</b>
                                    Available
                                </li>
                                </ul>
                               
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AboutArea
