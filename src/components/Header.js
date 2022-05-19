import React, { useState } from 'react'
import GenerativeArt from './GenerativeArt'

function Header() {
  const [isReady, setIsReady] = useState(false)
  function handleArtReady () {
    setIsReady(true)
  }
  return (
    <header className='relative h-[70vh] flex flex-col justify-center items-center sm:flex-row'>
      <div className='absolute top-16 w-full max-w-sm aspect-square rounded-full overflow-hidden'>
        {/* Covers the GenerativeArt initially and wait for it to show, once the p5 shows, set opacity to 0 */}
        <div className={`w-full h-full absolute bg-black transition duration-700 ${isReady ? 'opacity-0' : ''}`}></div>
        <GenerativeArt onReady={handleArtReady}/>
      </div>
      <div className='relative flex flex-col sm:flex-row items-baseline mt-10 [text-shadow:2px_2px_0px_rgba(0,0,0,1)]'>
        <h1 className='text-3xl md:text-4xl text-white mx-2'>Po-Hsiang Lu</h1>
        <h2 className='text-base md:text-xl text-slate-200 mx-2'>Front-End Developer</h2>
      </div>
      
    </header>
  )
}

export default Header