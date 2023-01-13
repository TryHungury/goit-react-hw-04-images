import { Component } from "react";
import Modal_css from "./Modal.module.css";

export class Modal extends Component {
    
    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown)
    }

    handleKeyDown = (event) => {
        if (event.code === "Escape") {
            this.props.onClick()
        }

        return
    }

    render() {
    const { Overlay, Modal } = Modal_css;
    const { onClick, url, alt } = this.props;
    return (
    <div className={Overlay} onClick={(e)=>(
        e.target.localName === "div" ? onClick() : null
    )}>
        <div className={Modal}>
            <img src={url} alt={alt} />
        </div>
    </div>
    )
}
}