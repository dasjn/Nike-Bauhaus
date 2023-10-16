import React, { useEffect, useState } from "react"

export default function OverlayNotification (props) {
    const [isShown, setIsShown] = useState(false);
    
    const closeOverlay = () => {
        setIsShown(false);
        setTimeout(() => {
          props.setNotificationOverlay(false);
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
            <div className="overlay-box">
                <button onClick={closeOverlay} className="overlay-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g>
                        <path d="M5.6 20L4 18.4L10.4 12L4 5.6L5.6 4L12 10.4L18.4 4L20 5.6L13.6 12L20 18.4L18.4 20L12 13.6L5.6 20Z" fill="#005AAB"/>
                        </g>
                    </svg>
                </button>
                <div className="overlay-message">
                    <h3 className="color-blue">Hey there!</h3>
                    <p className="overlay-paragraph color-red">
                        <span>Thanks for dropping by. This project was designed by </span>
                        <span style={ { display: "initial", cursor: "pointer" } } >
                            <a target="_blank" href="https://www.landerzaro.com/" className="btn-noBorder color-blue btn-noBorder-animation">Lander</a>
                        </span> 
                        <span> and developed by </span>
                        <span style={ { display: "initial", cursor: "pointer" } } >
                            <a target="_blank" href="https://github.com/dasjn" className="btn-noBorder color-blue btn-noBorder-animation">David</a>
                        </span> 
                        <span> in collaboration with the rest of the team at </span>
                        <span style={ { display: "initial", cursor: "pointer" } } >
                            <a target="_blank" href="https://www.byfugu.com/" className="btn-noBorder color-blue btn-noBorder-animation">byfugu.com</a>
                        </span> 
                    </p>
                    <p className="overlay-paragraph color-blue">This project pays tribute to a design movement that remains relevant nearly a century later. It expresses gratitude to the visionaries who shaped this thinking and to the Nike team for creating a product that respects the Bauhaus ethos. With a deep appreciation for design and the work of others, we hope you enjoy this homage to the Bauhaus, crafted with care.</p>
                    <p className="overlay-paragraph color-red">If you'd like to learn more about how it was done or explore more great projects like this, please feel free to visit the following websites.</p>
                </div>
                <div className="overlay-buttons">
                    <a target="_blank" href="https://www.landerzaro.com/" className="btn btn-border color-blue">
                        <span>landerzaro.com</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g>
                                <path className="arrow-icon" d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z" fill="#005AAB"/>
                            </g>
                        </svg>
                    </a>
                    <a target="_blank" href="https://github.com/dasjn" className="btn btn-border color-blue">
                        <span>david's github</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g>
                                <path className="arrow-icon" d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z" fill="#005AAB"/>
                            </g>
                        </svg>
                    </a>
                    <a target="_blank" href="https://www.byfugu.com/" className="btn btn-border color-blue">      
                        <span>byfugu.com</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g>
                                <path className="arrow-icon" d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z" fill="#005AAB"/>
                            </g>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}