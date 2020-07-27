import React, { Component } from 'react'
import {Container, Row} from "react-bootstrap";
import SinglePortfolio from '../../Componants/Portfolio/SinglePortfolio';
import Clockwise from "../../images/clockwise-services.jpg"
import MovieApp from "../../images/calvinscrop.png"

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
                        <SinglePortfolio 
                        image={Clockwise}
                        title="Clockwise Technologies"
                        disc="This was a freelance project I did for an engineering firm. It was build using React.js."
                        link="https://clockwise.netlify.app"
                        repo="https://github.com/calvin1337/portfolio"
                        type="Professional"
                        />
                        <SinglePortfolio 
                        image={MovieApp} 
                        title="Calvin's Movie App"
                        disc="This was a little project I did to track and rate movies I watched during lockdown built using React.js. It uses firebase for storing data and TMDB API for retrieving and displaying movies."
                        link="https://calvinsmovieratings.netlify.app"
                        repo="https://github.com/calvin1337/MovieRatingApp"
                        type="Personal"
                        />
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Portfolio
