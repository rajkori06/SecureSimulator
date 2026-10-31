export default function Floor({ width = 120, depth = 80 }) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[width, depth]} />
      <meshStandardMaterial color="#e0e0e0" />
    </mesh>
  )
}