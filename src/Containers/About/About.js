import React, { Component } from 'react'
import AboutArea from '../../Componants/About/AboutArea/AboutArea'
import ServicesArea from '../../Componants/About/ServicesArea/ServicesArea'
import WIWW from '../../Componants/About/WhatIWorkWith/WIWW'

export class About extends Component {
    render() {
        return (
            <div>
                <AboutArea />
                <WIWW />
                <ServicesArea />
            </div>
        )
    }
}

export default About
