import React, { Component } from 'react'
import {Container, Row, Col} from "react-bootstrap";
import "./homepage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

export class Homepage extends Component {
    render() {
        return (
            <div className="home-area">
                <div className="home-particle"></div>
                <Container>
                    <Row className="justify-content-center">
                        <Col col="12" lg="10">
                            <div className="home-content">
                            <h1>Hi, I am <span className="color-theme">Calvin Donaldson</span>
                            </h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore debitis aliquid, quaerat aliquam enim consectetur.</p>
                            <ul className="social">
                                <li>
                                <a href="/">
                                <FontAwesomeIcon icon={faTwitter} size="3x"/>
                                </a>
                                </li>
                                <li>
                                <a href="/">
                                <FontAwesomeIcon icon={faInstagram} size="3x"/>
                                </a>
                                </li>
                                <li>
                                <a href="/">
                                <FontAwesomeIcon icon={faGithub} size="3x"/>
                                </a>
                                </li>
                                <li>
                                <a href="/">
                                <FontAwesomeIcon icon={faLinkedin} size="3x"/>
                                </a>
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

export default Homepage
