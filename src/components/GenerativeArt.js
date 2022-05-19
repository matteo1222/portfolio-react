import React from 'react'
import Sketch from 'react-p5'
import { browserName } from 'react-device-detect'

let width = 400
let height = 200
let scale = 10
let rows = height / scale
let cols = width / scale
let increment = 0.1
let zOffset = 0

function GenerativeArt({ onReady }) {
  const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
    p5.createCanvas(width, height).parent(canvasParentRef)
    onReady()
	};

	const draw = (p5) => {
    p5.background(0)

    // p5.stroke(0);
    // let fps = p5.frameRate()
    // p5.text("FPS: " + fps.toFixed(2), 10, 10);

    let yOffset = 0
    for (let y = 0; y < rows; y++) {
      let xOffset = 0
      p5.stroke(200)
      p5.fill(0)
      p5.beginShape()
      for (let x = 0; x < cols; x++) {
        const mountainHeight = p5.noise(xOffset, yOffset, zOffset) * height
        
        p5.curveVertex(x * scale, y * scale + mountainHeight)
        xOffset += increment
      }
      p5.curveVertex(width,  2 * height)
      p5.curveVertex(0, 2 * height)
      p5.endShape(p5.CLOSE)

      yOffset += increment
    }
    zOffset += 0.001
		// NOTE: Do not use setState in the draw function or in functions that are executed
		// in the draw function...
		// please use normal variables or class properties for these purposes
	};
  return (
    <div>
      <Sketch setup={setup} draw={draw} />
      {/* A bug in p5 caused Chrome to run the p5 setup function twice, which is the effect I want.
      Therefore, for browsers that are not Chrome, render <Sketch/> twice  */}
      {browserName !== 'Chrome' && <Sketch setup={setup} draw={draw} />}
    </div>
  )
}

export default GenerativeArt