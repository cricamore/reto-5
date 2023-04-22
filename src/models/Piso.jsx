import { DoubleSide } from "three";


export default function Piso(){
    return(
        <mesh position={[0, -0.5, 0.5]}rotation-x={-Math.PI * 0.5}>
            <planeGeometry args={[3.84, 3.84]}/>
            <meshStandardMaterial side={DoubleSide} color='black'/>
        </mesh>
    );
}