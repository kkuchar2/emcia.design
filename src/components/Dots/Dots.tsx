import {useCallback, useMemo, useRef, useState} from "react";

import {useFrame, useThree} from "@react-three/fiber";
import * as THREE from "three";
import {Vector3} from "three";
import {InstancedMesh} from "three/src/objects/InstancedMesh";

export const Dots = () => {

    const { viewport } = useThree();

    const [numDots, setNumDots] = useState(0);

    const ref = useRef<InstancedMesh>();

    const { vec, transform, positions } = useMemo(() => {
        const vec = new THREE.Vector3();
        const transform = new THREE.Matrix4();

        // Precompute randomized initial positions

        // uniform equal spacing to fill dots in viewport betwwen 50 and 100px
        const spacingX = 20;
        const spacingY = 20;

        // number of dots
        const dotsCount = Math.floor(viewport.width / spacingX) * Math.floor(viewport.height / spacingY);
        setNumDots(dotsCount);

        const positions = [...Array(dotsCount)].map((_, i) => {
            const position = new THREE.Vector3();

            // Place dot in a grid:
            position.x = (i % Math.floor(viewport.width / spacingX)) * spacingX - (viewport.width / 2);
            position.y = Math.floor(i / Math.floor(viewport.width / spacingX)) * spacingY - (viewport.height / 2);
            position.z = 0;
            // Offset every other column (hexagonal pattern)
            // position.y += (i % 2) * 2.5;

            // // Add some noise
            position.x += Math.random() * 10.3;
            position.y += Math.random() * 10.3;

            return position;
        });

        return { vec, transform, positions };
    }, [viewport]);

    const roundedSquareWave = useCallback((time, distX, distY) => {
        let coeff = Math.sin(0.2 + Math.PI);
        return 5 * Math.exp(-(distX * distX + distY * distY) / 30000) * coeff;
    }, []);

    useFrame((state) => {

        const { clock, mouse } = state;

        const x = (mouse.x * viewport.width) / 2;
        const y = (mouse.y * viewport.height) / 2;
        const time = clock.elapsedTime;

        for (let i = 0; i < numDots; ++i) {
            // (x, y) square distance from mouse to dot
            const distX = positions[i].x - x;
            const distY = positions[i].y - y;
            // mouse position in a grid:
            const wave = roundedSquareWave(time, distX, distY);

            vec.copy(positions[i]).add(new Vector3(wave * distX, wave * distY, wave));
            transform.setPosition(vec);

            if (ref.current) {
                ref.current.setMatrixAt(i, transform);
            }
        }

        if (ref.current) {
            ref.current.instanceMatrix.needsUpdate = true;
        }
    });

    return <instancedMesh ref={ref} args={[null, null, numDots]}>
        <circleBufferGeometry args={[2]}/>
        <meshBasicMaterial color={'white'} opacity={0.3} transparent={true}/>
    </instancedMesh>;
};

export default Dots;