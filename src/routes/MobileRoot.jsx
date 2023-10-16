import React, { useState, useEffect } from "react"
import { Outlet, ScrollRestoration } from "react-router-dom"
import Cursor from "../components/Cursor.jsx"
import MobileHeader from "../components/MobileHeader.jsx"
import Footer from "../components/Footer.jsx"
import OverlayNotification from "../components/OverlayNotification.jsx"
import DeviceNotification from "../components/DeviceNotification.jsx"


export default function MobileRoot() {
    const [notificationOverlay, setNotificationOverlay] = useState(false)
    const [notificationDevice, setNotificationDevice] = useState(false)

    useEffect (() => {
        setNotificationDevice(true)
    },[])

    return(
        <>
            {
                notificationDevice ? <DeviceNotification notificationDevice={notificationDevice} setNotificationDevice={setNotificationDevice}/> : null
            }
            <Cursor />
            <MobileHeader setNotificationOverlay={setNotificationOverlay} />
            <Outlet context={[ setNotificationOverlay ]}/>
            <ScrollRestoration />
            {
                notificationOverlay ? <OverlayNotification notificationOverlay={notificationOverlay} setNotificationOverlay={setNotificationOverlay}/> : null
            }
        </>
    )
}