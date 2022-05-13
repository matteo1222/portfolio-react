import React, { useState } from 'react'

function Contact() {
  const EMAIL = 'matthewlu.tw@gmail.com'
  const [copied, setCopied] = useState(false)

  const handleClick = () => {
    setCopied(true)
    navigator.clipboard.writeText(EMAIL)
  }

  return (
    <address className='mt-8 h-96 flex flex-col items-center justify-center'>
      <div className='relative'>
        <button onClick={handleClick} className='text-4xl hover:cursor-pointer'>Contact</button>
        {copied && <p className='absolute top-10 left-3'>Email Copied!</p>}
      </div>
    </address>
  )
}

export default Contact