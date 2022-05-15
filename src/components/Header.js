import React from 'react'
import GenerativeArt from './GenerativeArt'

function Header() {
  return (
    <header className='relative h-[70vh] flex flex-col justify-center items-center sm:flex-row'>
      <div className='absolute top-16 w-full overflow-hidden'>
        <GenerativeArt/>
      </div>
      <div className='relative text-left'>
        <h1 className='text-4xl md:text-6xl text-blue-900'>Po-Hsiang Lu</h1>
        <h2 className='text-base md:text-xl text-slate-500'>Front-End Developer</h2>
      </div>
      
    </header>
  )
}

export default Header