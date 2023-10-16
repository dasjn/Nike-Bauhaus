import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import ShopCart from "./ShopCart.jsx"

export default function Header(props) {
    const { setNotificationOverlay } = props

    const [cartView, setCartView] = useState(0)
    const [showFirstIcon, setShowFirstIcon] = useState(true);
    const [scrollToTopFlag, setScrollToTopFlag] = useState(false);

    const { pathname } = useLocation();

    useEffect(() => {
        if (scrollToTopFlag || pathname === "/" || pathname === "/shop") {
            window.scrollTo(0, 50); // Scroll to the desired position
            setScrollToTopFlag(false); // Reset the flag
        }
    }, [pathname, scrollToTopFlag]);

    // Function to manually trigger the scroll to top
    function scrollToTop() {
        setScrollToTopFlag(true);
    }

    const handleCartView = () => {
        setCartView((prevCartView) => (prevCartView === 0 ? 1 : 0));
    }

    useEffect(() => {
    if (!cartView) {
        // If cartView is false, hide the first icon after a delay
        const timeout = setTimeout(() => {
            setShowFirstIcon(false);
        }, 400); // Delay matches the transition duration (0.4s)
        return () => clearTimeout(timeout);
    } else {
        const timeout = setTimeout(() => {
            setShowFirstIcon(true);
        }, 400); // Delay matches the transition duration (0.4s)
        return () => clearTimeout(timeout);
    }
    }, [cartView]);

    return(
        <>
            <header className="header">
                <Link to={`/`} onClick={scrollToTop}>
                    <nav className="header-leftContent">
                        <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
                            <path d="M0 0.106445L28.1713 29.7224L57.7872 57.8937H0V0.106445Z" fill="#F6BD1C"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="59" height="58" viewBox="0 0 59 58" fill="none">
                            <path d="M0.345571 57.8937C7.9343 57.8937 15.4487 56.399 22.4598 53.4949C29.4709 50.5908 35.8413 46.3342 41.2073 40.9682C46.5734 35.6021 50.8299 29.2317 53.734 22.2207C56.6381 15.2096 58.1328 7.69517 58.1328 0.106445L0.345573 0.106443L0.345571 57.8937Z" fill="#005AAB"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="138" height="52" viewBox="0 0 138 52" fill="none">
                            <g clipPath="url(#clip0_74_728)">
                                <path d="M15.4946 51.538C11.4053 51.3701 8.05958 50.2133 5.44353 48.0649C4.94427 47.6545 3.75458 46.4239 3.35545 45.9049C2.29461 44.526 1.57337 43.1839 1.09232 41.6949C-0.387963 37.1114 0.373884 31.0968 3.27142 24.4959C5.75233 18.8447 9.58047 13.2398 16.2592 5.47704C17.2431 4.33477 20.1728 0.994141 20.1917 0.994141C20.1987 0.994141 20.0391 1.28007 19.8381 1.62825C18.1015 4.63518 16.6157 8.17704 15.8062 11.2433C14.5059 16.1635 14.6627 20.3858 16.2655 23.6598C17.3712 25.9154 19.2667 27.8691 21.3982 28.9491C25.1297 30.8391 30.5929 30.9955 37.2646 29.4066C37.724 29.2965 60.4856 23.0503 87.8463 15.5257C115.207 8.00042 137.597 1.8483 137.6 1.85337C137.608 1.85989 74.0336 29.982 41.0312 44.5715C35.8047 46.8814 34.407 47.4648 31.9499 48.3566C25.6689 50.6368 20.0426 51.7248 15.4946 51.538Z" fill="#ED1B24"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_74_728">
                                    <rect width="137.245" height="50.5638" fill="white" transform="translate(0.355469 0.995117)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </nav>
                </Link>
                <nav className="header-rightContent">
                    <Link to={`/`} onClick={scrollToTop} className="anchor btn-noBorder color-red btn-noBorder-animation" style={ { marginRight: "20px", fontSize: "16px" } }><span>The Bauhaus</span></Link>
                    <Link to={`shop`} onClick={scrollToTop}><button className="btn btn-border color-red">Get yours</button></Link>
                    <button onClick={(e) => { e.preventDefault(); handleCartView(); }} className="btn btn-noBorder">
                    {showFirstIcon ? (
                        <svg style={{ opacity: showFirstIcon , transition: "opacity 0.2s" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g>
                                <path d="M5.6 20L4 18.4L10.4 12L4 5.6L5.6 4L12 10.4L18.4 4L20 5.6L13.6 12L20 18.4L18.4 20L12 13.6L5.6 20Z" fill="#ED1B24"/>
                            </g>
                        </svg>
                    ) : ( 
                        
                        <svg style={{ opacity: !showFirstIcon, transition: "opacity 0.2s" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g>
                                <path d="M5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V8C3 7.45 3.19583 6.97917 3.5875 6.5875C3.97917 6.19583 4.45 6 5 6H7C7 4.61667 7.4875 3.4375 8.4625 2.4625C9.4375 1.4875 10.6167 1 12 1C13.3833 1 14.5625 1.4875 15.5375 2.4625C16.5125 3.4375 17 4.61667 17 6H19C19.55 6 20.0208 6.19583 20.4125 6.5875C20.8042 6.97917 21 7.45 21 8V20C21 20.55 20.8042 21.0208 20.4125 21.4125C20.0208 21.8042 19.55 22 19 22H5ZM5 20H19V8H5V20ZM12 14C13.3833 14 14.5625 13.5125 15.5375 12.5375C16.5125 11.5625 17 10.3833 17 9H15C15 9.83333 14.7083 10.5417 14.125 11.125C13.5417 11.7083 12.8333 12 12 12C11.1667 12 10.4583 11.7083 9.875 11.125C9.29167 10.5417 9 9.83333 9 9H7C7 10.3833 7.4875 11.5625 8.4625 12.5375C9.4375 13.5125 10.6167 14 12 14ZM9 6H15C15 5.16667 14.7083 4.45833 14.125 3.875C13.5417 3.29167 12.8333 3 12 3C11.1667 3 10.4583 3.29167 9.875 3.875C9.29167 4.45833 9 5.16667 9 6Z" fill="#ED1B24"/>
                                <circle cx="20" cy="5" r="4" fill="#005AAB"/>
                            </g>
                        </svg>
                    )}
                    </button>
                </nav>
            </header>
            <ShopCart cartView={cartView} setNotificationOverlay={setNotificationOverlay} />
        </>
    )
}