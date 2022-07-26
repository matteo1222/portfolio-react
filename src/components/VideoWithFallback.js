import React from "react";

function VideoWithFallback({
  src,
  fallback,
  type = "image/png",
  alt,
  ...delegated
}) {
  return (
    <video
      autoPlay={true}
      muted={true}
      loop={true}
      poster={fallback}
      {...delegated}
    >
      <source src={src} type="video/webm" />
      <img src={fallback} alt={alt} type={type} />
    </video>
  );
}

export default VideoWithFallback;
