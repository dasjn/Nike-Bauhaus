import React, { useEffect, useState } from "react"

export default function DeviceNotification (props) {
    const [isShown, setIsShown] = useState(false);
    
    const closeOverlay = () => {
        setIsShown(false);
        setTimeout(() => {
          props.setNotificationDevice(false);
        }, 500); // Adjust the delay as needed
    }

    useEffect(() => {
        // When the component mounts, add the 'overlay-open' class to trigger the opacity transition.
        setIsShown(true);
    }, []);

    const overlayClass = isShown ? "overlay-notification overlay-open" : "overlay-notification";


    return (
        <section className={overlayClass}>
            <div onClick={closeOverlay} className="overlay-background"></div>
            <div style={{
                top: "0", width: "min(90%, 500px)"
            }} className="overlay-box">
                <button onClick={closeOverlay} className="overlay-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g>
                        <path d="M5.6 20L4 18.4L10.4 12L4 5.6L5.6 4L12 10.4L18.4 4L20 5.6L13.6 12L20 18.4L18.4 20L12 13.6L5.6 20Z" fill="#005AAB"/>
                        </g>
                    </svg>
                </button>
                <div className="overlay-message">
                    <h3 className="color-blue">Hi!</h3>
                    <p className="overlay-paragraph color-red">
                        <span>This project really takes advantage of the size from a desktop. To better enjoy the experience, please check the website on your computer :)</span>
                    </p>
                </div>
                <div className="overlay-buttons">
                    <button onClick={closeOverlay} className="btn btn-border color-blue">
                        <span>Gotcha</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g>
                                <path className="arrow-icon" d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z" fill="#005AAB"/>
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}