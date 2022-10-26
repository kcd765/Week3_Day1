import React from 'react'
import './modal.css'

const Modal = ({ hideModal, display, msg }) => {
    const displayHideClassName = display ? "modal display-block" : "modal display-none"

    return (
        <div id="myModal" className={displayHideClassName}>
            <div className="modal-content">
                <span className="close" onClick={hideModal}>&times;</span>
                <p>{msg}</p>
            </div>
        </div>
    )
}

export default Modal