'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Sphere } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const ref = useRef<THREE.Points>(null)
  
  const positions = useMemo(() => {
    const pos = new Float32Array(3000 * 3)
    for (let i = 0; i < 3000; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return pos
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.03
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.05
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#3b82f6"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  )
}

function FloatingOrbs() {
  const orb1Ref = useRef<THREE.Mesh>(null)
  const orb2Ref = useRef<THREE.Mesh>(null)
  const orb3Ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    
    if (orb1Ref.current) {
      orb1Ref.current.position.x = Math.sin(t * 0.3) * 3
      orb1Ref.current.position.y = Math.cos(t * 0.5) * 2
      orb1Ref.current.position.z = Math.sin(t * 0.4) * 2
    }
    
    if (orb2Ref.current) {
      orb2Ref.current.position.x = Math.cos(t * 0.4) * 4
      orb2Ref.current.position.y = Math.sin(t * 0.3) * 2.5
      orb2Ref.current.position.z = Math.cos(t * 0.5) * 2
    }
    
    if (orb3Ref.current) {
      orb3Ref.current.position.x = Math.sin(t * 0.5) * 2.5
      orb3Ref.current.position.y = Math.cos(t * 0.4) * 3
      orb3Ref.current.position.z = Math.sin(t * 0.3) * 3
    }
  })

  return (
    <>
      <Sphere ref={orb1Ref} args={[0.5, 32, 32]} position={[2, 0, 0]}>
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.1} />
      </Sphere>
      <Sphere ref={orb2Ref} args={[0.3, 32, 32]} position={[-2, 1, 0]}>
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.1} />
      </Sphere>
      <Sphere ref={orb3Ref} args={[0.4, 32, 32]} position={[0, -1, 2]}>
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.08} />
      </Sphere>
    </>
  )
}

function NeuralNetwork() {
  const linesRef = useRef<THREE.LineSegments>(null)

  const [positions, indices] = useMemo(() => {
    const nodes: THREE.Vector3[] = []
    const nodeCount = 50
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 5
      ))
    }

    const pos: number[] = []
    const idx: number[] = []
    
    nodes.forEach((node, i) => {
      pos.push(node.x, node.y, node.z)
      
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = node.distanceTo(nodes[j])
        if (dist < 3) {
          idx.push(i, j)
        }
      }
    })

    return [new Float32Array(pos), new Uint16Array(idx)]
  }, [])

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.getElapsedTime() * 0.02
      linesRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1
    }
  })

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="index"
          count={indices.length}
          array={indices}
          itemSize={1}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#3b82f6" transparent opacity={0.15} />
    </lineSegments>
  )
}

export function Background3D() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <ParticleField />
        <FloatingOrbs />
        <NeuralNetwork />
      </Canvas>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#050505]/50 pointer-events-none" />
      
      {/* Grid background */}
      <div className="absolute inset-0 grid-background opacity-20 pointer-events-none" />
    </div>
  )
}
