import React, { Component } from 'react'
import { Col } from "react-bootstrap";
import "./contactForm.css";

export class ContactForm extends Component {
    render() {
        return (
            <Col lg="6">
                <div className="contact-form-wrapper">
                <h4>Get In Touch</h4>
                    <form 
            name="contact"
            method="POST" 
            data-netlify="true" 
            netlify-honeypot="bot-field"
            className="contact-form"
            action="/contact">
                        <div className="form-field">
                             <label for="name">Enter Your Name</label>
                             <input type="text" name="name" id="contact-form-name"  />
                        </div>
                        <div className="form-field">
                            <label for="email">Enter Your Email</label>
                            <input type="text" name="email" id="contact-form-email" />
                        </div>
                        <div className="form-field">
                            <label for="subject">Enter Your Subject</label>
                            <input type="text" name="subject" id="contact-form-subject" />
                         </div>
                        <div className="form-field">
                            <label for="message">Enter Your Message</label>
                            <textarea name="message" id="contact-form-message" cols="30" rows="6"></textarea>
                        </div>
                        <div className="form-field">
                            <button className="btnStyle" type="submit">Send Mail</button>
                        </div>
                     <input type="hidden" name="form-name" value="contact" />  
                    </form>
                </div>
            </Col>
        )
    }
}

export default ContactForm
