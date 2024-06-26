/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/a_student_2_lvl_10_emb.gltf
*/

/*
eslint-disable react/no-unknown-property
*/

import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import startAnimation from '../helpers/startAnimation';

const AStudentModel = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL+'/a_student_2_lvl_10_emb.gltf');
  const { actions, names } = useAnimations(animations, group);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    startAnimation(actions, names);
  }, [actions, names]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <group name='ARMA_a_student_2_lvl_10'>
          <primitive object={nodes.pivot} />
          <skinnedMesh
            castShadow
            name='MESH_a_student_2_lvl_10'
            geometry={nodes.MESH_a_student_2_lvl_10.geometry}
            material={materials.Texture_capibara}
            skeleton={nodes.MESH_a_student_2_lvl_10.skeleton}
          />
        </group>
        <mesh position={[2, 0, 0]} name='MESH_board' geometry={nodes.MESH_board.geometry} material={materials.Texture_a_student_2_lvl_10} />
      </group>
    </group>
  );
};

export default AStudentModel;

useGLTF.preload('/a_student_2_lvl_10_emb.gltf');
