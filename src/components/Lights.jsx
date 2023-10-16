import { useRef } from "react"
import { useHelper } from "@react-three/drei"
import * as THREE from 'three'


export default function Lights()
{
    return <>
        <ambientLight intensity={0.1} />
        <spotLight
            intensity={0.3}
            position={[2, 1.5, 2]}
            castShadow
            shadow-normalBias = {0.1}
            shadow-camera-near={0.5}
            shadow-camera-far={4}
            angle={0.5}
        />
    </>
}