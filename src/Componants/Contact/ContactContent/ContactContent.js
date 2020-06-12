import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import "./contact.css";

export class ContactContent extends Component {
    render() {
        return (
            
               
                    <div className="contact-info-block">
                        <span className="contact-icon">
                        <FontAwesomeIcon icon={faPhone}/>
                        </span>
                            <div className="contact-content">
                            <h6>{this.props.title}</h6>
                                <p>Lorem, ipsum.</p>
                            </div>
                    </div>
                
            
        )
    }
}

export default ContactContent
