import React, { Component } from 'react'
import AboutArea from '../../Componants/About/AboutArea/AboutArea'

import WIWW from '../../Componants/About/WhatIWorkWith/WIWW'

export class About extends Component {
    render() {
        return (
            <div>
                <AboutArea />
                <WIWW />
                
            </div>
        )
    }
}

export default About
