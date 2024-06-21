/*
eslint-disable react/no-unknown-property
*/

import * as THREE from 'three';
import { extend, Canvas, RenderProps } from '@react-three/fiber';
import React, { FC, Suspense } from 'react';
import { Vector3 } from '@react-three/fiber/dist/declarations/src/three-types';
import CAPYBARA_MODEL from "../models";
import {CapybaraType} from "../types";
import {  OrbitControls } from '@react-three/drei'

extend(THREE);


const Scene: FC<{
  capybaraType: CapybaraType;
}> = ({capybaraType }) => {
  const CapybaraModel = CAPYBARA_MODEL[capybaraType] as React.FC;
  const camera: RenderProps<any>['camera'] =  { position: [-8, 0, -0.5], fov: 45 };
  const capybaraPosition: Vector3 = [0, -2.2, -0.5]
  return (
   <Canvas shadows camera={camera}>
     <OrbitControls />
     <mesh>
       <ambientLight intensity={1.5} />
       <directionalLight position={[-2, 3, -3]} intensity={1} castShadow />
       <directionalLight position={[0, 4.5, -3]} intensity={1} />
       <directionalLight position={[-2, 5, 3]} intensity={1} />
       <group position={capybaraPosition}>
         <Suspense fallback={null}>
           <CapybaraModel />
         </Suspense>
       </group>
     </mesh>
     <group receiveShadow>
        <mesh name='floor' position={[-0.5, -2.3, -0.6]} rotation={[0.01, 0, 0]}>
          <boxGeometry args={[8, 0, 20]} />
        </mesh>
       <mesh name='shadow' receiveShadow position={[2, -2.2, 0]}>
         <boxGeometry attach='geometry' args={[20, 0, 20]} />
         <shadowMaterial attach='material' color={'#818181'}/>
       </mesh>
     </group>
   </Canvas>
  );
};

export default Scene;
