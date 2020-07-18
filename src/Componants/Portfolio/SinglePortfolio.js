import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLink} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import {Col} from "react-bootstrap";
import "./portfolio.css"

export class SinglePortfolio extends Component {
    render() {
        return (
            <Col lg="6" md="6" col="12" className="mt-30">
                <div class="portfolio-single">
                    <div class="portfolio-img">
                        <a href={this.props.link} target="_blank" rel="noopener noreferrer">
                        <img src={this.props.image} alt="Clockwise-tech" />

                        </a>
                    </div>
                        <a href={this.props.link} target="_blank" rel="noopener noreferrer">
                    <h5>{this.props.title}</h5>

                        </a>
                            <h6>{this.props.disc}</h6>
                        <div className="tagContainer">
                            <span className="tag">Javascript</span>
                            <span className="tag">HTML</span>
                            <span className="tag">CSS</span>
                            <span className="tag">React</span>
                        </div>
                        <div className="typeContainer">
                        <span className="typeTag">{this.props.type} </span>

                        <div className="gitLink">
                            <a href={this.props.link} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLink} size="2x" />
                            </a>
                            <a href={this.props.repo} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                        </div>
                        </div>
                        
                </div>
                
            </Col>
        )
    }
}

export default SinglePortfolio
