import React from 'react'
import { createPortal } from "react-dom";
import "../Styles/Modal.css"

export default function Modal({ modalState }) {

    const [modal, setModal] = modalState;

    if (modal===null) return null;

  return createPortal(
    <div className="modal" role="dialog">
        <div className="background">{/*empty on purpose*/}</div>
        <div className="window">{modal}</div>
    </div>,
    document.getElementById("portal")
    );
}
