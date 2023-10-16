import React, { useState, useEffect, Suspense } from "react"
import { useLocation } from "react-router-dom"
import { Canvas } from "@react-three/fiber"
import { Loader } from "@react-three/drei"
import Experience from "./Experience.jsx"
import FloatingMenu from "./FloatingMenu.jsx"
import { BauhausEdContent, BlueEdContent, GreenEdContent, WhiteEdContent, WomenEdContent } from "./SneakersContent.jsx"
import { BauhausEdTitle, BlueEdTitle, GreenEdTitle, WhiteEdTitle, WomenEdTitle, BauhausEdPrice, BlueEdPrice, GreenEdPrice, WhiteEdPrice, WomenEdPrice } from "./SneakersTitle.jsx"

export default function ThreeDEditor() {

    const [activeTitle, setActiveTitle] = useState("bauhausEdContent")
    const [activeSneaker, setActiveSneaker] = useState("bauhausEdContent")
    const [activeContent, setActiveContent] = useState("bauhausEdContent")
    const [contentXPosition, setContentXPosition] = useState(0)
    const [contentOpacity, setContentOpacity] = useState(1); // Initialize opacity to 1 (fully visible)


    // Change state if the user chose sneaker on the landing
    let { state } = useLocation()

    useEffect(() => {
        if (state) {
            setActiveTitle(state.type)
            setActiveSneaker(state.type)
            setActiveContent(state.type)
        }
    }, [])

    const renderActiveTitle = () => {
        switch (activeTitle) {
            case "bauhausEdContent":
                return <BauhausEdTitle />
            case "greenEdContent":
                return <GreenEdTitle />
            case "womenEdContent":
                return <WomenEdTitle />
            case "blueEdContent":
                return <BlueEdTitle />
            case "whiteEdContent":
                return <WhiteEdTitle />
            default:
                return null
        }
    }

    const renderActiveContent = () => {
        switch (activeContent) {
            case "bauhausEdContent":
                return <BauhausEdContent />
            case "greenEdContent":
                return <GreenEdContent />
            case "womenEdContent":
                return <WomenEdContent />
            case "blueEdContent":
                return <BlueEdContent />
            case "whiteEdContent":
                return <WhiteEdContent />
            default:
                return null
        }
    }

    const renderActivePrice = () => {
        switch (activeContent) {
            case "bauhausEdContent":
                return <BauhausEdPrice />
            case "greenEdContent":
                return <GreenEdPrice />
            case "womenEdContent":
                return <WomenEdPrice />
            case "blueEdContent":
                return <BlueEdPrice />
            case "whiteEdContent":
                return <WhiteEdPrice />
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
                // Change the active content after fade-out is complete
                setActiveTitle(newContent)
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
            <div style={{borderBottom:"none"}} className="grid">
                <div className="shoe-item">
                    <section style={{ opacity: contentOpacity, transition: "opacity 0.4s" }} >{renderActiveTitle()}</section>
                </div>
                <div className="shoe-item"></div>
                <div className="shoe-item"></div>
                <div style={{zIndex:10}} className="shoe-item">
                    <Canvas className="shoe-canvas"
                        shadows
                    >
                        <Suspense fallback={null}>
                            <Experience activeContent={activeContent} contentXPosition={contentXPosition}/>
                        </Suspense>
                    </Canvas>
                    <Loader
                        containerStyles={{ backgroundColor: "#F7F7F7" }}
                        dataStyles={{ fontFamily: "Bicyclette-Bold", fontSize: "16px", color:"#333" }}
                        barStyles={{ backgroundColor: "#005AAB", height: "6px" }}
                        innerStyles={ { background: "#F6BD1C", height: "6px" } }
                    />
                </div>
            </div>

                        {/* Apply opacity transition */}
            <div style={{ opacity: contentOpacity, transition: "opacity 0.4s" }}>
                {renderActiveContent()}
            </div>  
            
            <FloatingMenu activeSneaker={activeSneaker} onContentChange={handleContentChange} renderActivePrice={renderActivePrice} contentOpacity={contentOpacity}/>   
        </>
    )
}