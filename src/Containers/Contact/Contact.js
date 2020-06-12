import React, { Component } from 'react'
import {Container, Row} from "react-bootstrap";
import ContactForm from '../../Componants/Contact/ContactForm/ContactForm';

export class Contact extends Component {
    render() {
        return (
            <div className="contact-area content-section">
                <Container>
                    <div className="sectionTitle">
                     <h2>Contact Me</h2><span>Contact Me</span>
                    </div>
                    <Row>
                        <ContactForm />
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Contact
