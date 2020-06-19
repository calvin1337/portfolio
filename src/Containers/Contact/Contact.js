import React, { Component } from 'react'
import {Container, Row, Col} from "react-bootstrap";
import ContactForm from '../../Componants/Contact/ContactForm/ContactForm';
import ContactContent from '../../Componants/Contact/ContactContent/ContactContent';
import ContactSocial from '../../Componants/Contact/ContactContent/ContactSocial';

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

                        <Col lg="6">
                            <div className="contact-info">
                                <ContactContent 
                                title="Phone"
                                info="07483347204"
                                />
                                <ContactContent 
                                title="Email" 
                                info="calvindonaldson1997313@gmail.com"
                                />
                                <ContactSocial 
                                title="Socials"
                                size="2x"
                                />

                            </div>
                        </Col>

                        
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Contact
