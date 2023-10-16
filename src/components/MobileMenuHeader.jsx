import React from "react";
import { Link } from "react-router-dom"

export default function MobileMenuHeader (props) {
    return(
        <div className={`menu-header ${props.menuView ? "menu-visible" : ""}`}>
            <Link to={`/`} onClick={() => props.handleMenuView()} className="anchor btn-noBorder color-red btn-noBorder-animation" style={ { fontSize: "16px" } }><span>The Bauhaus</span></Link>
            <Link to={`shop`} onClick={() => props.handleMenuView()} style={{display:"contents"}}><button style={{width: "180px", justifyContent: "center"}} className="btn btn-border color-red">Get yours</button></Link>
            <button onClick={() => props.handleCartView()} style={ { userSelect: "none", width: "180px", justifyContent: "center" } } className="btn btn-border color-blue">
                <span>{props.cartView? "Close cart" : "See cart"}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g>
                        <path className="arrow-icon" d="M5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V8C3 7.45 3.19583 6.97917 3.5875 6.5875C3.97917 6.19583 4.45 6 5 6H7C7 4.61667 7.4875 3.4375 8.4625 2.4625C9.4375 1.4875 10.6167 1 12 1C13.3833 1 14.5625 1.4875 15.5375 2.4625C16.5125 3.4375 17 4.61667 17 6H19C19.55 6 20.0208 6.19583 20.4125 6.5875C20.8042 6.97917 21 7.45 21 8V20C21 20.55 20.8042 21.0208 20.4125 21.4125C20.0208 21.8042 19.55 22 19 22H5ZM5 20H19V8H5V20ZM12 14C13.3833 14 14.5625 13.5125 15.5375 12.5375C16.5125 11.5625 17 10.3833 17 9H15C15 9.83333 14.7083 10.5417 14.125 11.125C13.5417 11.7083 12.8333 12 12 12C11.1667 12 10.4583 11.7083 9.875 11.125C9.29167 10.5417 9 9.83333 9 9H7C7 10.3833 7.4875 11.5625 8.4625 12.5375C9.4375 13.5125 10.6167 14 12 14ZM9 6H15C15 5.16667 14.7083 4.45833 14.125 3.875C13.5417 3.29167 12.8333 3 12 3C11.1667 3 10.4583 3.29167 9.875 3.875C9.29167 4.45833 9 5.16667 9 6Z" fill="#005AAB"/>
                        <circle cx="20" cy="5" r="4" fill="#ED1B24"/>
                    </g>
                </svg>
            </button>
        </div>
    )
}