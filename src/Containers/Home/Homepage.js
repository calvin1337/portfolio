import React, { Component } from 'react'
import {Container, Row, Col} from "react-bootstrap";
import "./homepage.css"

import Background from '../../Componants/Particle/Background';
import Social from '../../Componants/Socials/Social';
import Typer from "../../Componants/Typewriter/Typewriter"
export class Homepage extends Component {


   

   


    render() {
        
        return (
            <div className="home-area">
                <div className="home-particle">
                    <Background />
                </div>
                <Container>
                    <Row className="justify-content-center">
                        <Col col="12" lg="10">
                            <div className="home-content">
                            <h1>Hi, I am <span> </span>
                                <Typer
                                    
                                    dataText={[" Calvin Donaldson"," Web Developer"," Self-taught"]} 
                                />
                                    <span class="cursor"></span>
                            </h1>
                            <p>I'm a web developer from the UK. I love to create beautiful, user-friendly, high-converting websites!</p>
                                <Social size="3x"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Homepage
