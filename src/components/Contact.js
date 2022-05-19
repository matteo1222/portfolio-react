import React, { useState } from 'react'

function Contact() {
  const EMAIL = 'matthewlu.tw@gmail.com'
  const [copied, setCopied] = useState(false)

  const handleClick = () => {
    setCopied(true)
    navigator.clipboard.writeText(EMAIL)
    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  return (
    <address id='contact' className='mt-8 h-96 flex flex-col items-center justify-center'>
      <button onClick={handleClick} className='text-4xl hover:cursor-pointer'>Contact</button>
      <p className={`origin-bottom opacity-0 ${copied ? 'animate-rotate-in-and-out' : ''}`}>Email Copied!</p>
    </address>
  )
}

export default Contact