import React, { Component } from 'react'
import {Container, Row} from "react-bootstrap";
import SinglePortfolio from '../../Componants/Portfolio/SinglePortfolio';
import Clockwise from "../../images/clockwise-services.png"

export class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio content-section padding-bottom-120">
                <Container>
                    <div className="sectionTitle">
                        <h2>Portfolio</h2>
                        <span>Portfolio</span>
                    </div>
                    <Row>
                        <SinglePortfolio image={Clockwise}/>

                    </Row>
                </Container>
            </div>
        )
    }
}

export default Portfolio
