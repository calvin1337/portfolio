import React, { Component } from 'react'
import {Container, Row} from "react-bootstrap";
import {faPalette, faCode, faMobileAlt} from "@fortawesome/free-solid-svg-icons";
import SingleService from './SingleService/SingleService';


export class ServicesArea extends Component {
    render() {
        return (
            <div className="service-area content-section">
                <Container>
                    <div className="sectionTitle">
                        <h2>Services</h2>
                        <span>Services</span>
                    </div>
                    <div className="service-wrapper">
                        <Row className="mt-30-reverse">
                            <SingleService serviceTitle="Web Design" icon={faPalette} />
                            <SingleService serviceTitle="Web Development" icon={faCode} />
                            <SingleService serviceTitle="Mobile Application" icon={faMobileAlt} />

                        </Row>
                    </div>
                </Container>
            </div>
        )
    }
}

export default ServicesArea
