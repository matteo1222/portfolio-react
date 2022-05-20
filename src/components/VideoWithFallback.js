import React from 'react'

function VideoWithFallback({ src, fallback, alt, ...delegated }) {
  return (
    <video autoPlay={true} loop={true} poster={fallback} {...delegated}>
      <source src={src} type='video/webm'/>
      <img src={fallback} alt={alt} type='image/png'/>
    </video>
  )
}

export default VideoWithFallback