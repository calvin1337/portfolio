import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import {withRouter} from "react-router"
import "./navigation.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
export class Navigation extends Component {

    state = {
        toggle: false
    }
   
    navToggle = () => {
        if(this.state.toggle === false){
            let nav = document.getElementById("navbar")
            nav.classList.add("showNav")
            this.setState({toggle:true})
        }
        if(this.state.toggle === true){
            let nav = document.getElementById("navbar")
            nav.classList.remove("showNav")
            this.setState({toggle:false})
        }
    }

    componentDidMount(){
        document.addEventListener("mousedown", this.handleClick, false )
    }

    componentWillUnmount(){
        document.removeEventListener("mousedown", this.handleClick, false)
    }


    handleClick = (e) => {
        if(this.node.contains(e.target)){
            return;
        } 

        this.navToggle()
    }

    render() {

        let toggle = ""
        if(this.state.toggle === false){
            toggle = faBars
        }

        if(this.state.toggle === true){
            toggle = faTimes
        }

        return (
            <nav ref={node => this.node = node } id="navbar" className="navSidebar">
                <button onClick={() => this.navToggle()} className="navbar-toggler">
                    <FontAwesomeIcon icon={toggle} />
                    </button>
                    <div className="nav-inner">
                    <div className="nav-image">
                        <a href="/">
                        <img src="https://picsum.photos/200/300" alt="Profile" />
                        </a>
                    </div>
                    <ul className="nav-menu">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink  to="/about">About</NavLink></li>
                        <li><NavLink  to="/portfolio">Portfolio</NavLink></li>
                        <li><NavLink  to="/blog">Blog</NavLink></li>
                        <li><NavLink  to="/contact">Contact</NavLink></li>
                    </ul>
                    <p className="nav-copyright">© 2020 <b><a  target="_blank" href="/">Calvin Donaldson</a></b></p>
                    </div>
            </nav>
        )
    }
}

export default withRouter(Navigation);
