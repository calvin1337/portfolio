import React, { Component } from 'react'
import "./wrapper.css";
import Navigation from '../Navigation/Navigation';
import Modal from './Modal/Modal';

export class Wrapper extends Component {

    closeNav = (e) => {
        console.log(e.target)
    }

    

    render() {

         
        return (

            <div  className="wrapper" onClick={(e) => this.closeNav(e)}>
                <Modal />
                <div className="bg-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <Navigation  id="nav" />
                {this.props.children}
            </div>
        )
    }
}

export default Wrapper
