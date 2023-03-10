import React, { useEffect, useRef } from 'react'
import { PowerGlitch } from 'powerglitch'

const App = () => {
  let model=useRef(null)
  useEffect(()=>{
    const models = ['colo.glb', 'petraa.glb', 'redem.glb', 'citza.glb', 'cwall.glb'];
		const toggleModel = document.querySelector('#toggle-model');
		let j = 0;
		setInterval(() => toggleModel.setAttribute('src', `${models[j++ % 5]}`), 5000);

    PowerGlitch.glitch(model,{
      playMode: 'always',
        hideOverflow: true,
        timing: {
            duration: 6000,
            iterations: 15,
            easing: 'ease-in-out',
        },
      shake: {
        velocity: 10,
        amplitudeX: 0.2,
        amplitudeY: 0.1,
    },})
  },[])
  

  return (
    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100vh'  }} >
      <div style={{ backgroundColor: 'gray', padding: '10px', width: '100%' }}>

      </div>
      <div style={{ backgroundColor: 'black', padding: '10px', width: '100%' , overflow:'hidden' }} >
      <div ref={e=>{model=e}}   >
      <model-viewer id="toggle-model" alt="A 3D model of a shishkebab" shadow-intensity="1" auto-rotate ar
		disable-tap camera-orbit="40deg 90deg m" 
		>
    </model-viewer>
      </div>
    
      </div>
    </div>
  )
}

export default App

// style={{ padding: '10px', width: '100%' , height:'100%' , objectFit:'contain' }}