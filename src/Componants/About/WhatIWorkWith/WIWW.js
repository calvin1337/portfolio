import React, { Component } from 'react'
import {Container, Row, Col} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faGit, faCss3, faReact, faJs } from '@fortawesome/free-brands-svg-icons'
import "./WIWW.css"

export class WIWW extends Component {
    render() {
        return (
            <div className="about-area content-section">
                <Container>
                <div className="sectionTitle">
                        <h2>
                        What I Work With
                        </h2>
                        <span>What I Work With</span>
                    </div>
                    <Row>
                        <Col lg="12">

                        <div className="stack  ">
                        <p>I enjoy building in my free time to learn new technologies. 
                            It's enjoyable to try out different concepts to strengthen my knowledge. 
                            
                            I'm currently focusing on learning more about the backend with PHP and mySQL.
                            </p>
                            <p>
                            The technologies below are the ones I have the most experience in. 
                            </p>
                            <ul className="techContainer mt-30">
                                <li>
                                <FontAwesomeIcon icon={faHtml5} size="4x"/>
                                   
                                </li>
                                <li>
                                <FontAwesomeIcon icon={faCss3} size="4x"/>
                                   
                                </li>
                                <li>
                                <FontAwesomeIcon icon={faJs} size="4x"/>
                                   
                                </li>
                                <li>
                                <FontAwesomeIcon icon={faReact} size="4x"/>
                                   
                                </li>
                                <li>
                                <FontAwesomeIcon icon={faGit} size="4x"/>
                                   
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

export default WIWW
