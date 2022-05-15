import React, { useState } from 'react'

function Contact() {
  const EMAIL = 'matthewlu.tw@gmail.com'
  const [copied, setCopied] = useState(false)

  const handleClick = () => {
    setCopied(true)
    navigator.clipboard.writeText(EMAIL)
    setTimeout(() => {
      setCopied(false)
    }, 1500)
  }

  return (
    <address id='contact' className='mt-8 h-96 flex flex-col items-center justify-center'>
      <button onClick={handleClick} className='text-4xl hover:cursor-pointer'>Contact</button>
      <p className={`transition ${copied ? '' : 'invisible'}`}>Email Copied!</p>
    </address>
  )
}

export default Contact