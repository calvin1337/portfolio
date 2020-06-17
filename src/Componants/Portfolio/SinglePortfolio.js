import React, { Component } from 'react'
import {Col} from "react-bootstrap";
import "./portfolio.css"

export class SinglePortfolio extends Component {
    render() {
        return (
            <Col lg="6" md="6" col="12" className="mt-30">
                <div class="portfolio-single">
                    <div class="portfolio-img">
                        <a href="http://heuristic-fermat-36eb80.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <img src={this.props.image} alt="Clockwise-tech" />

                        </a>
                    </div>
                        <a href="http://heuristic-fermat-36eb80.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <h5>Clockwise Technologies</h5>

                        </a>
                        <h6>Lorem ipsum dolor sit amet.</h6>
                        <div className="tagContainer">
                            <span className="tag">Javascript</span>
                            <span className="tag">HTML</span>
                            <span className="tag">CSS</span>
                            <span className="tag">React</span>
                        </div>

                </div>
                
            </Col>
        )
    }
}

export default SinglePortfolio
