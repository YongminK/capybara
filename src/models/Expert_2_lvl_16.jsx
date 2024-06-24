/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/expert_2_lvl_16.gltf
*/

import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import startAnimation from '../helpers/startAnimation';

/*
eslint-disable react/no-unknown-property
*/

const Expert = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL+'/expert_2_lvl_16.gltf');
  const { actions, names } = useAnimations(animations, group);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    startAnimation(actions, names);
  }, [actions, names]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <group name='ARMA_bag_plane' position={[-0.503, 0, 1.386]} rotation={[0, -0.427, 0]}>
          <primitive object={nodes.Bone} />
          <primitive object={nodes.Bone001} />
          <primitive object={nodes.Bone003} />
          <group name='MESH_bag_plane'>
            <skinnedMesh castShadow name='Cube001' geometry={nodes.Cube001.geometry} material={materials.black} skeleton={nodes.Cube001.skeleton} />
            <skinnedMesh castShadow name='Cube001_1' geometry={nodes.Cube001_1.geometry} material={materials.grey_metall} skeleton={nodes.Cube001_1.skeleton} />
            <skinnedMesh castShadow name='Cube001_2' geometry={nodes.Cube001_2.geometry} material={materials.grey_mat} skeleton={nodes.Cube001_2.skeleton} />
            <skinnedMesh castShadow name='Cube001_3' geometry={nodes.Cube001_3.geometry} material={materials.paper_plane} skeleton={nodes.Cube001_3.skeleton} />
          </group>
        </group>
        <group name='ARMA_expert_2_lvl_16' position={[0.597, 0, -0.923]} rotation={[0, -1.531, 0]}>
          <primitive object={nodes.pelvis} />
          <skinnedMesh
            castShadow
            name='MESH_b_student_2_lvl_8'
            geometry={nodes.MESH_b_student_2_lvl_8.geometry}
            material={materials['Texture_capibara.005']}
            skeleton={nodes.MESH_b_student_2_lvl_8.skeleton}
          />
          <group name='MESH_shirt'>
            <skinnedMesh name='Plane007' geometry={nodes.Plane007.geometry} material={materials.shirt} skeleton={nodes.Plane007.skeleton} />
            <skinnedMesh castShadow name='Plane007_1' geometry={nodes.Plane007_1.geometry} material={materials.tie} skeleton={nodes.Plane007_1.skeleton} />
          </group>
        </group>
      </group>
    </group>
  );
};

export default Expert;

useGLTF.preload('/expert_2_lvl_16.gltf');
