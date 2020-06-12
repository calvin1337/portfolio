import React, { Component } from 'react';
import {Col} from "react-bootstrap";
import "./singleService.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class SingleService extends Component {
    render() {
        return (
            <Col lg="4" md="6" col="12" className="mt-30">
                <div className="singleService">
                    <span className="serviceIcon">
                        <FontAwesomeIcon icon={this.props.icon}/>
                    </span>
                    <h5>{this.props.serviceTitle}</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nisi modi iure deleniti cum corrupti? Iusto quae reprehenderit enim natus!</p>
                </div>
            </Col>
        )
    }
}

export default SingleService
