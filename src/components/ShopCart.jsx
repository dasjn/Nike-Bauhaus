import React from "react"
import NumberSelector from "./NumberSelector.jsx"
import { useIsMobile } from "../IsMobileContext.jsx"

export default function ShopCart (props) {
    const isMobile = useIsMobile()

    return (
        <div className={`shop-cart ${props.cartView ? "cart-visible" : ""}`}>
            <div className="shop-cart-title">
                <p className="paragraph-landing">
                    <span style={ { fontWeight: "700" } }>Nike - React 270 Bauhaus Limited Edition </span>
                    <span>€130.00</span>
                </p>
                <p className="paragraph-landing">
                    <span style={ { fontWeight: "700" } }>Units:</span>
                </p>
            </div>
            <NumberSelector  minValue={0} maxValue={9} defaultValue={1} />
            {isMobile ? (
                null // Render nothing if isMobile is true
            ) : (
                <p className="paragraph-landing">
                    <span style={{ fontWeight: "700", userSelect: "none", color: "var(--color-blue, #005AAB)" }}>
                    Size: 42
                    </span>
                </p>
            )}
            <div className="shop-cart-buttons">
                <button onClick={() => props.setNotificationOverlay(true)} style={ { marginRight: "20px" } } className="btn btn-border color-red">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g>
                            <path className="arrow-icon" d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="#ED1B24"/>
                        </g>
                    </svg>
                </button>
                <button onClick={() => props.setNotificationOverlay(true)} style={{userSelect: "none"}} className="btn btn-border color-blue">Checkout</button>
            </div>
        </div>
    )
}