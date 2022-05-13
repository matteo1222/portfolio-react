import React from 'react'

function Header() {
  return (
    <header className='relative h-[70vh]'>
      <div className='absolute text-left top-40 left-10'>
        <h1 className='text-4xl md:text-6xl text-blue-900'>Po-Hsiang Lu</h1>
        <h2 className='text-base md:text-xl text-slate-500'>Front-End Developer</h2>
      </div>
    </header>
  )
}

export default Header