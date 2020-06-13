import React, { Component } from 'react'
import {Col} from "react-bootstrap";
import "./portfolio.css"

export class SinglePortfolio extends Component {
    render() {
        return (
            <Col lg="4" md="6" col="12" className="mt-30">
                <div class="portfolio-single">
                    <div class="portfolio-img">
                        <img src="https://picsum.photos/200/300" alt="" />
                    </div>
                        <h5>Clockwise Technologies</h5>
                        <h6>Lorem ipsum dolor sit amet.</h6>
                </div>
            </Col>
        )
    }
}

export default SinglePortfolio
