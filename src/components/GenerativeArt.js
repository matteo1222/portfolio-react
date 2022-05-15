import React from 'react'
import Sketch from 'react-p5'

let width = 400
let height = 200
let scale = 15
let rows = height / scale
let cols = width / scale
let increment = 0.01
let zOffset = 0
function GenerativeArt() {
  const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
		p5.createCanvas(width, height, p5.WEBGL).parent(canvasParentRef)
	};

	const draw = (p5) => {
    p5.background(255)
    p5.translate(-width/2, -height/2,0);
    let yOffset = 0
    for (let y = 0; y < rows; y++) {
      let xOffset = 0
      for (let x = 0; x < width; x++) {
        const mountainHeight = p5.noise(xOffset, yOffset, (y % 3 + 1) * zOffset) * height
        
        p5.stroke(190)
        p5.point(x, y * scale + mountainHeight)
  
        xOffset += increment
      }

      yOffset += increment
    }
    zOffset += 0.01
		// NOTE: Do not use setState in the draw function or in functions that are executed
		// in the draw function...
		// please use normal variables or class properties for these purposes
	};
  return (
    <Sketch setup={setup} draw={draw} />
  )
}

export default GenerativeArt