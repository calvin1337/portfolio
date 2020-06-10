import React, { Component } from 'react'
import "./wrapper.css";
import Navigation from '../Navigation/Navigation';

export class Wrapper extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="bg-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <Navigation />
                {this.props.children}
            </div>
        )
    }
}

export default Wrapper
