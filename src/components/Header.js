import React from 'react'
import GenerativeArt from './GenerativeArt'

function Header() {
  return (
    <header className='relative h-[70vh] flex flex-col justify-center items-center sm:flex-row'>
      <div className='absolute top-16 w-full max-w-sm aspect-square rounded-full overflow-hidden'>
        <GenerativeArt/>
      </div>
      <div className='relative flex flex-col sm:flex-row items-baseline mt-10 [text-shadow:2px_2px_0px_rgba(0,0,0,1)]'>
        <h1 className='text-3xl md:text-4xl text-white mx-2'>Po-Hsiang Lu</h1>
        <h2 className='text-base md:text-xl text-slate-200 mx-2'>Front-End Developer</h2>
      </div>
      
    </header>
  )
}

export default Header