import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import MobileMenuHeader from "./MobileMenuHeader.jsx"
import ShopCart from "./ShopCart.jsx"

export default function MobileHeader(props) {
    const { setNotificationOverlay } = props

    const [menuView, setMenuView] = useState(0)
    const [menuMounted, setMenuMounted] = useState(false);
    const [cartView, setCartView] = useState(0)
    const [cartMounted, setCartMounted] = useState(false);
    const [showFirstIcon, setShowFirstIcon] = useState(false);

    const handleMenuView = () => {
        if (menuView === 1 && cartView === 1) {
            handleCartView()
        }

        if (menuView === 1) {
            // If the menu is currently open, start the unmounting process
            setMenuView(0); // Start the closing animation
            setTimeout(() => {
                setMenuMounted(false); // Unmount the component after the animation
            }, 400); // Delay matches the transition duration (0.4s)
        } else {
            // If the menu is closed, mount it and start the opening animation;
            setMenuMounted(true);
            setTimeout(() => {
                setMenuView(1);
            }, 1)
            
        }
    }

    const handleCartView = () => {
        if (cartView === 1) {
            // If the cart is currently open, start the unmounting process
            setCartView(0); // Start the closing animation
            setTimeout(() => {
                setCartMounted(false); // Unmount the component after the animation
            }, 600); // Delay matches the transition duration (0.4s)
        } else {
            // If the cart is closed, mount it and start the opening animation;
            setCartMounted(true);
            setTimeout(() => {
                setCartView(1);
            }, 1)
            
        }
    };

    useEffect(() => {
    if (!menuView) {
        // If menuView is false, hide the first icon after a delay
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
    }, [menuView]);

    return(
        <>
            <header className="header">
                <Link to={`/`} onClick={menuView? () => handleMenuView() : null}>
                    <nav className="header-leftContent">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
                            <path d="M0 0.5L12.1875 13.3125L25 25.5H0V0.5Z" fill="#F6BD1C"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
                            <path d="M2.72191e-06 25.5C3.28305 25.5 6.53395 24.8534 9.56709 23.597C12.6002 22.3406 15.3562 20.4991 17.6777 18.1777C19.9991 15.8562 21.8406 13.1002 23.097 10.0671C24.3534 7.03394 25 3.78305 25 0.5L3.8147e-06 0.499999L2.72191e-06 25.5Z" fill="#005AAB"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="61" height="23" viewBox="0 0 61 23" fill="none">
                            <g>
                                <path d="M7.11845 22.0956C5.3307 22.0222 3.86805 21.5165 2.72437 20.5772C2.50611 20.3978 1.98601 19.8598 1.81152 19.6329C1.34774 19.0301 1.03244 18.4433 0.822132 17.7924C0.17499 15.7886 0.508051 13.1592 1.77478 10.2734C2.85937 7.80283 4.53294 5.35251 7.45274 1.95884C7.88284 1.45946 9.16365 -0.000976562 9.17192 -0.000976562C9.17498 -0.000976562 9.10518 0.124023 9.01732 0.27624C8.25814 1.5908 7.60855 3.13921 7.25467 4.47972C6.68621 6.63068 6.75478 8.47657 7.45549 9.90789C7.93886 10.894 8.76753 11.7481 9.69936 12.2202C11.3307 13.0465 13.7191 13.1149 16.6358 12.4202C16.8366 12.3721 26.7874 9.64144 38.7488 6.35188C50.7102 3.062 60.4985 0.372441 60.5 0.374655C60.5034 0.377509 32.7103 12.6718 18.2824 19.05C15.9975 20.0598 15.3865 20.3149 14.3123 20.7047C11.5664 21.7016 9.10671 22.1772 7.11845 22.0956Z" fill="#ED1B24"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_205_3053">
                                    <rect width="60" height="22.1053" fill="white" transform="translate(0.5)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </nav>
                </Link>
                <nav className="header-rightContent">
                    <a onClick={() => handleMenuView()} style={{border: "0", padding:"0"}} className="btn btn-noBorder color-red">
                    {showFirstIcon ? (
                        <svg style={{ opacity: showFirstIcon , transition: "opacity 0.2s" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g>
                                <path d="M5.6 20L4 18.4L10.4 12L4 5.6L5.6 4L12 10.4L18.4 4L20 5.6L13.6 12L20 18.4L18.4 20L12 13.6L5.6 20Z" fill="#ED1B24"/>
                            </g>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g>
                                <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="#ED1B24"/>
                            </g>
                        </svg>
                    )}
                    </a>
                </nav>
            </header>
            {menuMounted && (
                <MobileMenuHeader showFirstIcon={showFirstIcon} menuView={menuView} cartView={cartView} handleCartView={handleCartView} handleMenuView={handleMenuView} />
            )}

            {cartMounted && (
                <ShopCart cartView={cartView} setNotificationOverlay={setNotificationOverlay} />
            )}
        </>
    )
}