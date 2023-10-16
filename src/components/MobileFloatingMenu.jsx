import React from "react"
import { useOutletContext } from "react-router-dom"

export default function FloatingMenu(props) {
    const [setNotificationOverlay] = useOutletContext()

    return(
        <div style={{border:"none"}} className="grid">
            <section className="floating-menu">
                <div className="floating-menu-container">
                    <div className="floating-menu-row-1">
                        <div className="row-1-leftContent">
                            <a className={`anchor selector-icon ${props.activeSneaker === "bauhausEdContent" ? "selected" : ""}`} style={ { marginRight: "16px" } } onClick={() => props.onContentChange("bauhausEdContent")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="-1 -1 41 41" fill="none">
                                    <path d="M19.5039 0.285156L38.5039 38.2852H0.503906L19.5039 0.285156Z" fill="#F6BD1C"/>
                                </svg>
                            </a>
                            <a className={`anchor selector-icon ${props.activeSneaker === "greenEdContent" ? "selected" : ""}`} style={ { marginRight: "20px" } } onClick={() => props.onContentChange("greenEdContent")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                                    <circle cx="20.5" cy="20.5" r="19.5" fill="#00EFB4"/>
                                </svg>
                            </a>
                            <a className={`anchor selector-icon ${props.activeSneaker === "womenEdContent" ? "selected" : ""}`} onClick={() => props.onContentChange("womenEdContent")} style={ { marginRight: "20px" } }>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-2 -2 44 44">
                                    <rect x="5" y="5" width="30" height="30" fill="#AFC3E3" transform="rotate(45 20 20)" />
                                </svg>
                            </a>
                            <a className={`anchor selector-icon ${props.activeSneaker === "blueEdContent" ? "selected" : ""}`} onClick={() => props.onContentChange("blueEdContent")} style={ { marginRight: "20px" } }>
                                <svg  xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-1 -1 42 42">
                                    <rect width="40" height="40" fill="#378CDD" />
                                </svg>
                            </a>
                            <a className={`anchor selector-icon ${props.activeSneaker === "whiteEdContent" ? "selected" : ""}`} onClick={() => props.onContentChange("whiteEdContent")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="-1 -1 43 37" fill="none">
                                    <path d="M34.357 34.4264C37.154 31.6294 39.0588 28.0657 39.8305 24.1861C40.6023 20.3065 40.2062 16.2851 38.6924 12.6306C37.1787 8.97608 34.6152 5.85251 31.3262 3.65488C28.0373 1.45725 24.1705 0.284271 20.2148 0.284271C16.2592 0.284271 12.3924 1.45725 9.10344 3.65488C5.81446 5.85251 3.25101 8.97608 1.73725 12.6306C0.223501 16.2851 -0.172565 20.3065 0.59914 24.1861C1.37084 28.0657 3.27566 31.6294 6.07271 34.4264L20.2148 20.2843L34.357 34.4264Z" fill="#CBCBCB"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="floating-menu-row-2">
                        <section style={{ opacity: props.contentOpacity, transition: "opacity 0.4s" }} >{props.renderActivePrice()}</section>
                        <div className="row-2-rightContent">
                            <a onClick={() => setNotificationOverlay(true)} style={ { userSelect: "none" } } className="btn-noborder">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g>
                                        <path className="arrow-icon" d="M5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V8C3 7.45 3.19583 6.97917 3.5875 6.5875C3.97917 6.19583 4.45 6 5 6H7C7 4.61667 7.4875 3.4375 8.4625 2.4625C9.4375 1.4875 10.6167 1 12 1C13.3833 1 14.5625 1.4875 15.5375 2.4625C16.5125 3.4375 17 4.61667 17 6H19C19.55 6 20.0208 6.19583 20.4125 6.5875C20.8042 6.97917 21 7.45 21 8V20C21 20.55 20.8042 21.0208 20.4125 21.4125C20.0208 21.8042 19.55 22 19 22H5ZM5 20H19V8H5V20ZM12 14C13.3833 14 14.5625 13.5125 15.5375 12.5375C16.5125 11.5625 17 10.3833 17 9H15C15 9.83333 14.7083 10.5417 14.125 11.125C13.5417 11.7083 12.8333 12 12 12C11.1667 12 10.4583 11.7083 9.875 11.125C9.29167 10.5417 9 9.83333 9 9H7C7 10.3833 7.4875 11.5625 8.4625 12.5375C9.4375 13.5125 10.6167 14 12 14ZM9 6H15C15 5.16667 14.7083 4.45833 14.125 3.875C13.5417 3.29167 12.8333 3 12 3C11.1667 3 10.4583 3.29167 9.875 3.875C9.29167 4.45833 9 5.16667 9 6Z" fill="#005AAB"/>
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}