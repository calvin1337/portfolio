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
                                <img src="https://picsum.photos/200/300" alt="Random Image" />
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className="about-content">
                                <h3>I am <span class="color-theme">Calvin Donaldson</span></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ratione impedit magnam voluptate aliquam nulla ex eius mollitia porro alias.</p>
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
                                <a className="btnStyle" href="/">Download CV</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AboutArea
