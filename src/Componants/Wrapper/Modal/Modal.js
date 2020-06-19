import React, { Component } from 'react'
import "./modal.css"

export class Modal extends Component {

    state = {
        showModal: "true"
    }

    closeModal = () => {
        this.setState({showModal:"false"})
    }

    render() {

        return (
            <div style={this.state.showModal === "false" ? {display:"none"} : null} className="modal">
                <div className="modal-box">
                    <h3>The site is a work in progress please keep in mind its not fully finished</h3>
                    <div style={{textAlign:"center"}}>
                    <button onClick={() => this.closeModal()} className="btn btn-secondary">Okay</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal
