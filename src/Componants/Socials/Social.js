import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

export class Social extends Component {
    render() {
        return (
            <ul className="social">
                <li>
                    <a target="_blank" href="https://twitter.com/ca1ven" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} size={this.props.size}/>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://instagram.com/calvindonladson" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size={this.props.size}/>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://github.com/calvin1337" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size={this.props.size}/>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://www.linkedin.com/in/calvindonaldson/" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size={this.props.size}/>
                    </a>
                </li>
            </ul>
        )
    }
}

export default Social
