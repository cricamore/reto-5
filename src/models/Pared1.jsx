import { useVideoTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import { DoubleSide } from "three";
import { VideoTexture } from 'three/src/textures/VideoTexture';
import * as THREE from 'three';

export default function Pared1(){
    const [video] = useState(() => {
        const vid = document.createElement('video');
        vid.src = 'static/video/equisde.mp4';
        vid.loop = true;
        vid.muted = true;
        vid.crossOrigin = 'anonymous';
        vid.load();
        return vid;
      });
      const videoTexture = useRef(new VideoTexture(video));
    
      const handleClick = () => {
        video.muted = true;
        video.play();
        console.log("Hice clic en el video")
      };


      const handleUnmuted= () => {
        video.muted = false;
        video.play();
        console.log("Desmutear")
      };
    
      return (
        <group>
            <mesh position={[0,0.584, -1.416]} rotation-y={[- Math.PI * 90]}>
                <planeGeometry args={[3.84, 2.16]}/>
                <meshStandardMaterial  side = {DoubleSide} color='red'/>
            </mesh>
            <mesh position={[0,0.584,-1.4157]}  scale={0.875} onPointerUp={handleClick} onDoubleClick={handleUnmuted}>
                <planeBufferGeometry args={[3.84, 2.16]} />
                <meshBasicMaterial map={videoTexture.current}  />
             </mesh>    
        </group>

      );
}