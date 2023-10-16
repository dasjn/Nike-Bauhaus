import { useFrame } from "@react-three/fiber"
import React, { useState } from "react"
import { useIsMobile } from "../IsMobileContext.jsx"
import { PerspectiveCamera, PresentationControls, Float, Backdrop, Environment } from "@react-three/drei"
import * as THREE from "three"
import Lights from "./Lights.jsx"
import { SneakerBauhaus, SneakerGreen, SneakerWoman, SneakerBlue, SneakerWhite } from "./Sneaker.jsx"

export default function Experience({ contentXPosition })
{
    const isMobile = useIsMobile()

    const cameraPosition = isMobile ? [0.025, 0.1, 1.05] : [0, 0.1, .6]

    const [currentXPosition, setCurrentXPosition] = useState(contentXPosition); 
  
    useFrame((state) => {

        setCurrentXPosition((prevX) => {
            const lerpFactor = 0.05; // Adjust the speed of the animation here
            return THREE.MathUtils.lerp(prevX, contentXPosition, lerpFactor);
          });
        
        state.camera.lookAt(state.camera.position.x, 0, 0);
        state.camera.updateProjectionMatrix();
    });

    return <>

        <PerspectiveCamera makeDefault fov={ 45 } near={ 0.1 } far={ 200 } position={ cameraPosition }/>

        <Lights />

        <group position={[currentXPosition - 5.0, 0.015, 0]}>
            <Float floatingRange={ [0, 0.04] } speed={4} rotationIntensity={0.2}>
                <PresentationControls
                        global={true}
                        cursor={false}
                        config={{ mass: 0.1, tension: 1000 }}
                        snap={{ mass: 3, tension: 500 }}
                >
                    <SneakerBauhaus rotation-x={ Math.PI / 8 } rotation-y={ Math.PI / 3 } scale={1.3} />
                </PresentationControls>
            </Float>
            <Backdrop receiveShadow position= { [ 0, -0.3, 0 ] } scale-x={ 2.5 }>
                <meshStandardMaterial color="#F6BD1C" 
                roughness={1}
                metalness={1}/>
            </Backdrop>
        </group>

        <group position={[currentXPosition - 2.5, 0.015, 0]}>
            <Float floatingRange={ [0, 0.04] } speed={4} rotationIntensity={0.2}>
                <PresentationControls
                    global={true}
                    cursor={false}
                    config={{ mass: 0.1, tension: 1000 }}
                    snap={{ mass: 3, tension: 500 }}
                >
                    <SneakerGreen rotation-x={ Math.PI / 8 } rotation-y={ Math.PI / 3 } scale={1.3} />
                </PresentationControls>
            </Float>
            <Backdrop receiveShadow position= { [ 0, -0.3, 0 ] } scale-x={ 2.5 }>
                <meshStandardMaterial color="#50D37F" roughness={1}
                metalness={1} />
            </Backdrop>
        </group>
        
        <group position={[currentXPosition, 0.015, 0]}>
            <Float floatingRange={ [0, 0.04] } speed={4} rotationIntensity={0.2}>
                <PresentationControls
                    global={true}
                    cursor={false}
                    config={{ mass: 0.1, tension: 1000 }}
                    snap={{ mass: 3, tension: 500 }}
                >
                    <SneakerWoman rotation-x={ Math.PI / 8 } rotation-y={ Math.PI / 3 } scale={1.3} />
                </PresentationControls>
            </Float>
            <Backdrop receiveShadow position= { [ 0, -0.3, 0 ] } scale-x={ 2.5 }>
                <meshStandardMaterial color="#AFC3E3" roughness={1}
                metalness={1} />
            </Backdrop>
        </group>

        <group position={[currentXPosition + 2.5, 0.015, 0]}>
            <Float floatingRange={ [0, 0.04] } speed={4} rotationIntensity={0.2}>
                <PresentationControls
                    global={true}
                    cursor={false}
                    config={{ mass: 0.1, tension: 1000 }}
                    snap={{ mass: 3, tension: 500 }}
                >
                    <SneakerBlue rotation-x={ Math.PI / 8 } rotation-y={ Math.PI / 3 } scale={1.3} />
                </PresentationControls>
            </Float>
            <Backdrop receiveShadow position= { [ 0, -0.3, 0 ] } scale-x={ 2.5 }>
                <meshStandardMaterial color="#A5DDF6" roughness={1}
                metalness={1} />
            </Backdrop>
        </group>

        <group position={[currentXPosition + 5, 0.015, 0]}>
            <Float floatingRange={ [0, 0.04] } speed={4} rotationIntensity={0.2}>
                <PresentationControls
                    global={true}
                    cursor={false}
                    config={{ mass: 0.1, tension: 1000 }}
                    snap={{ mass: 3, tension: 500 }}
                >
                    <SneakerWhite  rotation-x={ Math.PI / 8 } rotation-y={ Math.PI / 3 } scale={1.3} />
                </PresentationControls>
            </Float>
            <Backdrop receiveShadow position= { [ 0, -0.3, 0 ] } scale-x={ 2.5 }>
                <meshStandardMaterial color="#999999" roughness={1}
                metalness={1}/>
            </Backdrop>
        </group>

        <Environment files="./images/empty_warehouse_01_1k.hdr" />
    </>
}