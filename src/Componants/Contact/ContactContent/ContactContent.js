import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./contact.css";

export class ContactContent extends Component {
    render() {

        return (
            
               
                    <div className="contact-info-block">
                        <span className="contact-icon">
                        <FontAwesomeIcon icon={this.props.icon}/>
                        </span>
                            <div className="contact-content">
                            <h6>{this.props.title}</h6>
                                <p>{this.props.info}</p>
                                
                            </div>
                    </div>
                
            
        )
    }
}

export default ContactContent
