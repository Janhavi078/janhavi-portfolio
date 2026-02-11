// import { useGLTF, useScroll, Float, Text, Environment, ContactShadows } from '@react-three/drei'
// import { useFrame } from '@react-three/fiber'
// import { useRef, useEffect } from 'react'
// import * as THREE from 'three'
// import "../styles/Experience.css";

// export default function Experience() {
//   const scroll = useScroll()
//   const skillRefs = useRef([])
//   const { scene } = useGLTF('/penguin.glb')
  
//   const skills = ["React", "Node.js", "Linux", "DevOps", "Networking", "MongoDB"]
//   const isMobile = window.innerWidth < 768

//   useEffect(() => {
//     if (scene) {
//       scene.traverse((child) => {
//         if (child.isMesh) {
//           child.material.side = THREE.DoubleSide
//           child.material.needsUpdate = true
//         }
//       })
//     }
//   }, [scene])

//   useFrame((state, delta) => {
//     const offset = scroll.offset // 0 to 1

//     if (scene) {
//       // POSITION FIX: Penguin ko right side par rakhenge taaki text na chupe
//       // Scroll karne par ye sirf thoda sa piche jayega, bada nahi hoga
//       scene.position.x = isMobile ? 0 : 1.8 
//       scene.position.y = isMobile ? -0.8 : -1.2
//       scene.position.z = offset * -4 // Limit depth movement

//       scene.rotation.y += delta * 0.3
//     }

//     skillRefs.current.forEach((ref, i) => {
//       if (ref) {
//         const angle = (i / skills.length) * Math.PI * 2
//         // Text Penguin ke charo taraf ghumega lekin text area se dur rahega
//         const radius = isMobile ? 1.5 : 2.5
//         ref.position.x = (isMobile ? 0 : 1.8) + Math.cos(angle) * radius
//         ref.position.y = Math.sin(angle) * radius
//         ref.position.z = offset * -2
        
//         ref.quaternion.copy(state.camera.quaternion)
//       }
//     })
//   })

//   return (
//     <group>
//       <Environment preset="apartment" />
//       <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2.5} />

//       <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
//         <primitive 
//           object={scene} 
//           // SCALE FIX: Isse zyada bada nahi hoga
//           scale={isMobile ? 0.07 : 0.1} 
//           position={[0, 0, 0]} 
//         />
//       </Float>

//       {skills.map((skill, i) => (
//         <Text
//           key={i}
//           ref={(el) => (skillRefs.current[i] = el)}
//           fontSize={isMobile ? 0.15 : 0.2}
//           color="#22d3ee"
//           anchorX="center"
//           anchorY="middle"
//         >
//           {skill}
//         </Text>
//       ))}
//     </group>
//   )
// }
// import { useGLTF, useScroll, Float, Environment, ContactShadows } from '@react-three/drei'
// import { useFrame } from '@react-three/fiber'
// import { useEffect } from 'react'
// import * as THREE from 'three'
// import "../styles/Experience.css";

// export default function Experience() {
//   const scroll = useScroll()
//   const { scene } = useGLTF('/penguin.glb')
//   const isMobile = window.innerWidth < 768

//   useEffect(() => {
//     if (scene) {
//       scene.traverse((child) => {
//         if (child.isMesh) {
//           child.material.side = THREE.DoubleSide
//           child.material.needsUpdate = true
//         }
//       })
//     }
//   }, [scene])

//   useFrame((state, delta) => {
//     const offset = scroll.offset // 0 to 1

//     if (scene) {
//       // POSITION: Penguin stays on the right so it doesn't overlap your text
//       scene.position.x = isMobile ? 0 : 1.8 
//       scene.position.y = isMobile ? -0.8 : -1.2
      
//       // MOVEMENT: Smoothly slides back slightly as you scroll
//       scene.position.z = offset * -2 

//       // ROTATION: Constant slow spin
//       scene.rotation.y += delta * 0.3
//     }
//   })

//   return (
//     <group>
//       <Environment preset="apartment" />
//       <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2.5} />

//       <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
//         <primitive 
//           object={scene} 
//           scale={isMobile ? 0.07 : 0.1} 
//         />
//       </Float>
      
//       {/* 3D Skills text removed to clean up the interface */}
//     </group>
//   )
// }
import { useState, useEffect } from 'react'
import { useGLTF, useScroll, Float, Html, Environment, ContactShadows } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import "../styles/Experience.css";

export default function Experience() {
  const scroll = useScroll()
  const { scene } = useGLTF('/penguin.glb')
  const [showChat, setShowChat] = useState(false)
  const isMobile = window.innerWidth < 768

  // Fix material transparency/double-sidedness
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.material.side = THREE.DoubleSide
          child.material.needsUpdate = true
        }
      })
    }
  }, [scene])

  // Trigger chat bubble after loading
  useEffect(() => {
    const timer = setTimeout(() => setShowChat(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  useFrame((state, delta) => {
    const offset = scroll.offset // 0 to 1

    if (scene) {
      // POSITION: Penguin stays on the right
      scene.position.x = isMobile ? 0 : 1.8 
      scene.position.y = isMobile ? -0.8 : -1.2
      
      // MOVEMENT: Smoothly slides back slightly as you scroll
      scene.position.z = offset * -2 

      // ROTATION: Constant slow spin
      scene.rotation.y += delta * 0.3
    }
  })

  return (
    <group>
      <Environment preset="apartment" />
      <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2.5} />

      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <primitive 
          object={scene} 
          scale={isMobile ? 0.07 : 0.1} 
        >
          {/* THE CHAT BUBBLE - Anchored to penguin */}
          {showChat && (
            <Html 
              position={[0, 12, 0]} // Sit above head
              center 
              distanceFactor={4}    // Higher number = Smaller bubble
            >
              <div className="penguin-bubble">
                Hey! I'm Janhavi. 👋 
                <br />
                <span>Let's take a tour!</span>
                <div className="bubble-arrow"></div>
              </div>
            </Html>
          )}
        </primitive>
      </Float>
    </group>
  )
}