import React from "react"

export default function Footer(props) {
    return(
        <footer className="footer">
            <div className="item">
                <div className="footer-container">
                    <div className="footer-leftContent">
                        <div className="footer-column">
                            <p className="footer-text-italic"><span className="blue">About</span></p>
                            <a onClick={() => props.setNotificationOverlay(true)} className="anchor footer-text"><span className="btn-noBorder-animation">The Bauhaus</span></a>
                            <a onClick={() => props.setNotificationOverlay(true)} className="anchor footer-text"><span className="btn-noBorder-animation">Shipping</span></a>
                            <a onClick={() => props.setNotificationOverlay(true)} className="anchor footer-text"><span className="btn-noBorder-animation">Returns</span></a>
                            <a onClick={() => props.setNotificationOverlay(true)} className="anchor footer-text"><span className="btn-noBorder-animation">FaQ</span></a>
                        </div>
                        <div className="footer-column">
                            <p className="footer-text-italic"><span className="blue">Connect</span></p>
                            <a onClick={() => props.setNotificationOverlay(true)} className="anchor footer-text"><span className="btn-noBorder-animation">Instagram</span></a>
                            <a onClick={() => props.setNotificationOverlay(true)} className="anchor footer-text"><span className="btn-noBorder-animation">X</span></a>
                            <a onClick={() => props.setNotificationOverlay(true)} className="anchor footer-text"><span className="btn-noBorder-animation">TikTok</span></a>
                            <a onClick={() => props.setNotificationOverlay(true)} className="anchor footer-text"><span className="btn-noBorder-animation">Youtube</span></a>
                        </div>
                        <div className="footer-column">
                            <p className="footer-text-italic"><span className="blue">Region</span></p>
                            <a onClick={() => props.setNotificationOverlay(true)} className="anchor footer-text" style={ { color: "var(--color-blue, #005AAB)" } }>
                                <span className="blue btn-noBorder-animation">English</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g>
                                        <path d="M12 15.3746L6 9.37461L7.4 7.97461L12 12.5746L16.6 7.97461L18 9.37461L12 15.3746Z" fill="#005AAB"/>
                                    </g>
                                </svg>
                            </a>
                            <a onClick={() => props.setNotificationOverlay(true)} className="anchor footer-text" style={ { color: "var(--color-blue, #005AAB)" } }>
                                <span className="blue btn-noBorder-animation">Europe</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g>
                                        <path d="M12 15.3746L6 9.37461L7.4 7.97461L12 12.5746L16.6 7.97461L18 9.37461L12 15.3746Z" fill="#005AAB"/>
                                    </g>
                                </svg>
                            </a>
                            <a onClick={() => props.setNotificationOverlay(true)} className="anchor footer-text" style={ { color: "var(--color-blue, #005AAB)" } }>
                                <span className="blue btn-noBorder-animation">€</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g>
                                        <path d="M12 15.3746L6 9.37461L7.4 7.97461L12 12.5746L16.6 7.97461L18 9.37461L12 15.3746Z" fill="#005AAB"/>
                                    </g>
                                </svg>
                            </a>
                        </div>
                        <div className="footer-column">
                            <p className="footer-text-italic"><span className="blue">Join Us!</span></p>
                            <input type="text" placeholder="Your Email *" className="footer-text" style={ { border: "var(--BORDER-SIZE, 2px solid) var(--color-red, #FF0000)", color: "#FF0000" } } />
                            <a onClick={() => props.setNotificationOverlay(true)} className="anchor footer-text">
                                <span className="btn-noBorder-animation">Subscribe</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g>
                                        <path d="M14 18L12.6 16.55L16.15 13L4 13V11L16.15 11L12.6 7.45L14 6L20 12L14 18Z" fill="#FF0000"/>
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="footer-rightContent">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
                                <path d="M0 0.106445L28.1713 29.7224L57.7872 57.8937H0V0.106445Z" fill="#F6BD1C"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="59" height="58" viewBox="0 0 59 58" fill="none">
                                <path d="M0.345571 57.8937C7.9343 57.8937 15.4487 56.399 22.4598 53.4949C29.4709 50.5908 35.8413 46.3342 41.2073 40.9682C46.5734 35.6021 50.8299 29.2317 53.734 22.2207C56.6381 15.2096 58.1328 7.69517 58.1328 0.106445L0.345573 0.106443L0.345571 57.8937Z" fill="#005AAB"/>
                            </svg>
                            <svg style={ { marginRight: "0" } } xmlns="http://www.w3.org/2000/svg" width="138" height="52" viewBox="0 0 138 52" fill="none">
                                <g clipPath="url(#clip0_74_728)">
                                    <path d="M15.4946 51.538C11.4053 51.3701 8.05958 50.2133 5.44353 48.0649C4.94427 47.6545 3.75458 46.4239 3.35545 45.9049C2.29461 44.526 1.57337 43.1839 1.09232 41.6949C-0.387963 37.1114 0.373884 31.0968 3.27142 24.4959C5.75233 18.8447 9.58047 13.2398 16.2592 5.47704C17.2431 4.33477 20.1728 0.994141 20.1917 0.994141C20.1987 0.994141 20.0391 1.28007 19.8381 1.62825C18.1015 4.63518 16.6157 8.17704 15.8062 11.2433C14.5059 16.1635 14.6627 20.3858 16.2655 23.6598C17.3712 25.9154 19.2667 27.8691 21.3982 28.9491C25.1297 30.8391 30.5929 30.9955 37.2646 29.4066C37.724 29.2965 60.4856 23.0503 87.8463 15.5257C115.207 8.00042 137.597 1.8483 137.6 1.85337C137.608 1.85989 74.0336 29.982 41.0312 44.5715C35.8047 46.8814 34.407 47.4648 31.9499 48.3566C25.6689 50.6368 20.0426 51.7248 15.4946 51.538Z" fill="#ED1B24"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_74_728">
                                        <rect width="137.245" height="50.5638" fill="white" transform="translate(0.355469 0.995117)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="footer-rightContent-right">
                            <a target="_blank" href="https://www.landerzaro.com" className="footer-text"><span className="btn-noBorder-animation">Designed by landerzaro.com</span></a>
                            <a target="_blank" href="https://github.com/dasjn" className="footer-text"><span className="btn-noBorder-animation">Developed by davidsosa.com</span></a>
                            <a target="_blank" href="https://www.byfugu.com" className="footer-text"><span className="btn-noBorder-animation">Find more at byfugu.com</span></a>
                        </div>
                    </div>
                </div>
            </div>
            <section className="footer-extra-space">
                <span className="disclaimer">All displayed content on this website belongs to its respective owners and creators. Our platform is designed solely for showcasing creativity and art, with no intention of generating profits.</span>
                <span className="disclaimer">If you believe any content should be removed, kindly inform us, and we will promptly address your concerns.</span> 
            </section>
        </footer>
    )
}