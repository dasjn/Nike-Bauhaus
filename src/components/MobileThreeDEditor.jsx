import React, { useState, useEffect, Suspense } from "react"
import { useLocation } from "react-router-dom"
import { Canvas } from "@react-three/fiber"
import { Loader } from "@react-three/drei"
import Experience from "./Experience.jsx"
import MobileFloatingMenu from "./MobileFloatingMenu.jsx"
import { MobileBauhausEdPrice, MobileBlueEdPrice, MobileGreenEdPrice, MobileWhiteEdPrice, MobileWomenEdPrice } from "./SneakersTitle.jsx"

export default function ThreeDEditor() {

    const [activeSneaker, setActiveSneaker] = useState("bauhausEdContent")
    const [activeContent, setActiveContent] = useState("bauhausEdContent")
    const [contentXPosition, setContentXPosition] = useState(0)
    const [contentOpacity, setContentOpacity] = useState(1); // Initialize opacity to 1 (fully visible)


    // Change state if the user chose sneaker on the landing
    let { state } = useLocation()

    useEffect(() => {
        if (state) {
            setActiveSneaker(state.type)
            setActiveContent(state.type)
        }
    }, [])

    const renderActivePrice = () => {
        switch (activeContent) {
            case "bauhausEdContent":
                return <MobileBauhausEdPrice />
            case "greenEdContent":
                return <MobileGreenEdPrice />
            case "womenEdContent":
                return <MobileWomenEdPrice />
            case "blueEdContent":
                return <MobileBlueEdPrice />
            case "whiteEdContent":
                return <MobileWhiteEdPrice />
            default:
                return null
        }
    }

    const handleContentChange = (newContent) => {
        if (newContent !== activeContent) {
            setActiveSneaker(newContent)
            // Fade out the current content
            setContentOpacity(0)
            setTimeout(() => {
                setActiveContent(newContent)
                // Fade in the new content
                setContentOpacity(1)
            }, 400) // Adjust the duration of the fade-out transition as needed
        }
    };

    useEffect(() => {
        // Calculate and set the X position for content based on the active content's position
        switch (activeSneaker) {
          case "bauhausEdContent":
            setContentXPosition(5);
            break;
          case "greenEdContent":
            setContentXPosition(2.5);
            break;
          case "womenEdContent":
            setContentXPosition(0);
            break;
          case "blueEdContent":
            setContentXPosition(-2.5);
            break;
          case "whiteEdContent":
            setContentXPosition(-5);
            break;
          default:
            setContentXPosition(0);
        }
    }, [activeSneaker]);

    return(
        <>
            <div className="mobile-shoe-canvas">
            <Suspense fallback={null}>
                <Canvas 
                    shadows
                >
                    <Experience activeContent={activeContent} contentXPosition={contentXPosition}/>
                </Canvas> 
            </Suspense>
            <Loader
                containerStyles={{ backgroundColor: "#F7F7F7" }}
                dataStyles={{ fontFamily: "Bicyclette-Bold", fontSize: "16px", color:"#333" }}
                barStyles={{ backgroundColor: "#005AAB", height: "6px" }}
                innerStyles={ { background: "#F6BD1C", height: "6px" } }
            />
            </div>
            <MobileFloatingMenu activeSneaker={activeSneaker} onContentChange={handleContentChange} renderActivePrice={renderActivePrice} contentOpacity={contentOpacity}/>   
        </>
    )
}