import React from 'react'

const NavBar = () => {
  return (
    <nav className='px-4'>
      <ul className='flex h-20 items-center justify-end text-slate-500'>
        <li className='mx-6'>
          <a href='#projects'>Projects</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar