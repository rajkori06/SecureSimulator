import { Canvas } from '@react-three/fiber'
import { OrbitControls, Grid } from '@react-three/drei'
import Floor from './Floor'

export default function Scene() {
  return (
    <Canvas camera={{ position: [20, 20, 20], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 20, 10]} intensity={1} />
      <Grid args={[100, 100]} cellSize={1} />
      <Floor />
      <OrbitControls />
    </Canvas>
  )
}