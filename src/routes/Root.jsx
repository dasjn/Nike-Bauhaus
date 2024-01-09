import React, { useState, useEffect } from "react"
import { Outlet, ScrollRestoration } from "react-router-dom"
import LoadingScreen from "../components/LoadingScreen.jsx"
import Cursor from "../components/Cursor.jsx"
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import OverlayNotification from "../components/OverlayNotification.jsx"

export default function Root() {
    const [notificationOverlay, setNotificationOverlay] = useState(false)

    return(
        <>
            <LoadingScreen />
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