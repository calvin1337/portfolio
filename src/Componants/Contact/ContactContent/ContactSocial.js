import React, { Component } from 'react'
import "./contact.css";
import Social from '../../Socials/Social';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone} from "@fortawesome/free-solid-svg-icons";

export class ContactSocial extends Component {
    render() {
        return (
            
            <div className="contact-info-block">
                <span className="contact-icon">
                        <FontAwesomeIcon icon={faPhone}/>
                </span>
                <div className="contactSocial">
                <h6>{this.props.title}</h6>
                <Social size={this.props.size} />
                </div>
            </div>
        )
    }
}

export default ContactSocial
