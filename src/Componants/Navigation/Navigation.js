import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import {withRouter} from "react-router"
import "./navigation.css"

export class Navigation extends Component {

   
componentDidMount() {
    console.log(this.props)
}
    

    render() {
        return (
            <nav className="navSidebar">
                <button class="navbar-toggler">
                    <i class="fas fa-bars"></i>
                    </button>
                    <div class="nav-inner">
                    <div class="nav-image">
                        <a href="/">
                        <img src="https://picsum.photos/200/300" alt="Profile picture" />
                        </a>
                    </div>
                    <ul class="nav-menu">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink  to="/about">About</NavLink></li>
                        <li><NavLink  to="/portfolio">Portfolio</NavLink></li>
                        <li><NavLink  to="/blog">Blog</NavLink></li>
                        <li><NavLink  to="/contact">Contact</NavLink></li>
                    </ul>
                    <p class="nav-copyright">© 2020 <b><a  target="_blank" href="/">Calvin Donaldson</a></b></p>
                    </div>
            </nav>
        )
    }
}

export default withRouter(Navigation);
