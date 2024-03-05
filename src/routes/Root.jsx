import React, { useState, useEffect } from "react"
import { Outlet, ScrollRestoration } from "react-router-dom"
import LoadingScreen from "../components/LoadingScreen.jsx"
import Cursor from "../components/Cursor.jsx"
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import OverlayNotification from "../components/OverlayNotification.jsx"

export default function Root() {
    const [loading, setLoading] = useState(true);
    const [notificationOverlay, setNotificationOverlay] = useState(false)

    const handleLoadingChange = (newLoadingState) => {
        setLoading(newLoadingState);
    };

    useEffect(() => {
        const body = document.body;
        console.log(body)
        if (loading) {
          body.classList.add('no-scroll');
        } else {
          body.classList.remove('no-scroll');
        }
    }, [loading]);

    return(
        <>
            <LoadingScreen onLoadingChange={handleLoadingChange}/>
            <Cursor />
            <Header setNotificationOverlay={setNotificationOverlay}/>
            <Outlet context={[ setNotificationOverlay ]}/>
            <ScrollRestoration />
            <Footer setNotificationOverlay={setNotificationOverlay}/>
            {
                notificationOverlay ? <OverlayNotification notificationOverlay={notificationOverlay} setNotificationOverlay={setNotificationOverlay}/> : null
            }
        </>
    )
}