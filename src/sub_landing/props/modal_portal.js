import { createPortal } from "react-dom"

import "./css/modal.css"

export function ModalPortal({children,open}){
    if(!open) return null

    return createPortal(<div className="modal_on">
        {children}
    </div>,document.getElementById("modal"));
}