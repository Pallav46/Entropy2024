import { useState } from 'react'
import ThreeScene from './ThreeScene'


function PastEvents() {
  const [count, setCount] = useState(0)

  return (
    <div className="app w-[100vw] flex h-screen bg-black text-white">
        <h1 className='text-[5vw] font-bold z-[10] absolute text-white opacity-20 top-10 right-20 hover:text-pink-600'>PAST EVENTS</h1>

        <div className="canvas w-1/2 h-screen absolute">
          

          <div className="images w-[25vw] h-[32vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img className="absolute w-full h-full object-cover opacity-0 absolute" src="/public/images/Entropy24.jpg"/>
            <img className="absolute w-full h-full object-cover opacity-0 absolute" src="/public/images/Robocon.jpg"/>
            <img className="absolute w-full h-full object-cover opacity-0 absolute" src="/public/images/Entropy22.jpg"/>
            <img className="absolute w-full h-full object-cover opacity-0 absolute" src="public/images/CulNight.jpg"/>
          </div>
          
        </div>
        <ThreeScene />
        <div className="w-1/2 h-screen flex items-center justify-center">
          <div className="links flex flex-col gap-10">
              <a className="transition-all hover:ml-5 opacity-30 hover:opacity-100 hover:text-pink-700 block tracking-tighter text-3xl"
                href=""><small className="text-xl tracking-normal">01.</small>
              Entropy 23
              </a>
              <a className="transition-all hover:ml-5 opacity-30 hover:opacity-100 hover:text-pink-700 block tracking-tighter text-3xl"
                href=""><small className="text-xl tracking-normal">02.</small>
              Robocon
              </a>
              <a className="transition-all hover:ml-5 opacity-30 hover:opacity-100 hover:text-pink-700 block tracking-tighter text-3xl"
                href=""><small className="text-xl tracking-normal">03.</small>
              Entropy 22
              </a>
              <a className="transition-all hover:ml-5 opacity-30 hover:opacity-100 block tracking-tighter text-3xl"
                href=""><small className="text-xl tracking-normal">04.</small>
              Cultural Night
              </a>
          </div>
        </div>
        
    </div>
  )
}

export default PastEvents
