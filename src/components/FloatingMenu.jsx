import React from "react"
import { Link as ScrollLink } from "react-scroll"
import { useOutletContext } from "react-router-dom"
import NumberSelector from "./NumberSelector.jsx"

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
                        <div className="row-1-rightContent">
                            <div className="row-1-rightContent-left">
                                <a onClick={() => setNotificationOverlay(true)} className="anchor footer-text" style={ { color: "var(--color-blue, #005AAB)" } }>
                                    <span style={ { userSelect: "none" } } className="blue btn-noBorder-animation">Size EUR</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g>
                                            <path d="M12 15.3746L6 9.37461L7.4 7.97461L12 12.5746L16.6 7.97461L18 9.37461L12 15.3746Z" fill="#005AAB"/>
                                        </g>
                                    </svg>
                                </a>
                            </div>
                            <div className="row-1-rightContent-right">
                                <NumberSelector minValue={36} maxValue={48} defaultValue={42}/> 
                            </div>
                        </div>
                    </div>
                    <div className="floating-menu-row-2">
                        <section style={{ opacity: props.contentOpacity, transition: "opacity 0.4s" }} >{props.renderActivePrice()}</section>
                        <div className="row-2-rightContent">
                            <button onClick={() => setNotificationOverlay(true)} className="btn btn-border color-blue">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g>
                                        <path className="arrow-icon" d="M12 21.0004L10.55 19.7004C8.86667 18.1837 7.475 16.8754 6.375 15.7754C5.275 14.6754 4.4 13.6879 3.75 12.8129C3.1 11.9379 2.64583 11.1337 2.3875 10.4004C2.12917 9.66706 2 8.91706 2 8.15039C2 6.58372 2.525 5.27539 3.575 4.22539C4.625 3.17539 5.93333 2.65039 7.5 2.65039C8.36667 2.65039 9.19167 2.83372 9.975 3.20039C10.7583 3.56706 11.4333 4.08372 12 4.75039C12.5667 4.08372 13.2417 3.56706 14.025 3.20039C14.8083 2.83372 15.6333 2.65039 16.5 2.65039C18.0667 2.65039 19.375 3.17539 20.425 4.22539C21.475 5.27539 22 6.58372 22 8.15039C22 8.91706 21.8708 9.66706 21.6125 10.4004C21.3542 11.1337 20.9 11.9379 20.25 12.8129C19.6 13.6879 18.725 14.6754 17.625 15.7754C16.525 16.8754 15.1333 18.1837 13.45 19.7004L12 21.0004ZM12 18.3004C13.6 16.8671 14.9167 15.6379 15.95 14.6129C16.9833 13.5879 17.8 12.6962 18.4 11.9379C19 11.1796 19.4167 10.5046 19.65 9.91289C19.8833 9.32122 20 8.73372 20 8.15039C20 7.15039 19.6667 6.31706 19 5.65039C18.3333 4.98372 17.5 4.65039 16.5 4.65039C15.7167 4.65039 14.9917 4.87122 14.325 5.31289C13.6583 5.75456 13.2 6.31706 12.95 7.00039H11.05C10.8 6.31706 10.3417 5.75456 9.675 5.31289C9.00833 4.87122 8.28333 4.65039 7.5 4.65039C6.5 4.65039 5.66667 4.98372 5 5.65039C4.33333 6.31706 4 7.15039 4 8.15039C4 8.73372 4.11667 9.32122 4.35 9.91289C4.58333 10.5046 5 11.1796 5.6 11.9379C6.2 12.6962 7.01667 13.5879 8.05 14.6129C9.08333 15.6379 10.4 16.8671 12 18.3004Z" fill="#005AAB"/>
                                    </g>
                                </svg>
                            </button>
                            <ScrollLink style={ { display: "contents" }}
                                to="sneakerInfo"
                                smooth={ true }
                                duration={ 1200 }
                                offset={ -80 }
                            >
                                <button style={ { userSelect: "none" } } className="btn btn-border color-blue">
                                    <span>Info</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g>
                                            <path className="arrow-icon" d="M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z" fill="#005AAB"/>
                                        </g>
                                    </svg>
                                </button>
                            </ScrollLink>
                            <button onClick={() => setNotificationOverlay(true)} style={ { backgroundColor: "var(--BAUHAUS-BLUE, #005AAB)" ,userSelect: "none" } } className="btn btn-border fill-blue">
                                <span>Add to cart</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g>
                                        <path className="arrow-icon" d="M5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V8C3 7.45 3.19583 6.97917 3.5875 6.5875C3.97917 6.19583 4.45 6 5 6H7C7 4.61667 7.4875 3.4375 8.4625 2.4625C9.4375 1.4875 10.6167 1 12 1C13.3833 1 14.5625 1.4875 15.5375 2.4625C16.5125 3.4375 17 4.61667 17 6H19C19.55 6 20.0208 6.19583 20.4125 6.5875C20.8042 6.97917 21 7.45 21 8V20C21 20.55 20.8042 21.0208 20.4125 21.4125C20.0208 21.8042 19.55 22 19 22H5ZM5 20H19V8H5V20ZM12 14C13.3833 14 14.5625 13.5125 15.5375 12.5375C16.5125 11.5625 17 10.3833 17 9H15C15 9.83333 14.7083 10.5417 14.125 11.125C13.5417 11.7083 12.8333 12 12 12C11.1667 12 10.4583 11.7083 9.875 11.125C9.29167 10.5417 9 9.83333 9 9H7C7 10.3833 7.4875 11.5625 8.4625 12.5375C9.4375 13.5125 10.6167 14 12 14ZM9 6H15C15 5.16667 14.7083 4.45833 14.125 3.875C13.5417 3.29167 12.8333 3 12 3C11.1667 3 10.4583 3.29167 9.875 3.875C9.29167 4.45833 9 5.16667 9 6Z" fill="#F7F7F7"/>
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}