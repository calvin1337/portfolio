import React, { Component } from 'react'
import AboutArea from '../../Componants/About/AboutArea/AboutArea'
import ServicesArea from '../../Componants/About/ServicesArea/ServicesArea'

export class About extends Component {
    render() {
        return (
            <div>
                <AboutArea />
                <ServicesArea />
            </div>
        )
    }
}

export default About
