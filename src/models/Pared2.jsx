import { useLoader } from '@react-three/fiber';
import React, { useState } from 'react';
import { DoubleSide,TextureLoader } from "three";


export default function Pared2(){
    const [clicked,setClicked] = useState(false);
    
    const PATH = "static/imagenes/"
    const texture1 = useLoader(TextureLoader, PATH + 'samurai.png')
    const texture2 = useLoader(TextureLoader, PATH + 'audirs6.png')

    const onHandleImages = () => {
        setClicked(!clicked);   
    };
    

    return (
        <group >
            <mesh position={[1.916, 0.584, 0.5]} rotation-y={[- Math.PI * 0.5]}>
                <planeGeometry args={[3.84, 2.16]}/>
                <meshStandardMaterial  side = {DoubleSide} color='red'/>
            </mesh>
            <mesh position={[1.9158, 0.584, 0.5]} rotation-y={[- Math.PI * 0.5]} scale={0.875}  onDoubleClick={onHandleImages} >
                <planeGeometry args={[3.84, 2.16]}/>
                <meshStandardMaterial map={clicked ? texture2 : texture1} />
            </mesh>
        </group>
    );
}