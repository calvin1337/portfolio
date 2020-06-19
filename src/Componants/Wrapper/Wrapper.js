import React, { Component } from 'react'
import "./wrapper.css";
import Navigation from '../Navigation/Navigation';
import Modal from './Modal/Modal';

export class Wrapper extends Component {

    
    

    render() {

         
        return (

            <div  className="wrapper" >
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
