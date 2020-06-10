import React, { Component } from 'react'
import "./navigation.css"

export class Navigation extends Component {
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
                        <li><a class="active" href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Portfolio</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                    <p class="nav-copyright">© 2020 <b><a  target="_blank" href="/">Calvin</a></b></p>
                    </div>
            </nav>
        )
    }
}

export default Navigation
