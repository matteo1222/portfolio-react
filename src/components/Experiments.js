import React from "react";
import VideoWithFallback from "./VideoWithFallback";
import piWebm from "../img/PI.webm";
import piGif from "../img/PI.gif";
import pinkBluePlanetWebm from "../img/pink-blue-planet.webm";
import pinkBluePlanetGif from "../img/pink-blue-planet.gif";
import circlesWebm from "../img/circles.webm";
import circlesGif from "../img/circles.gif";
import ExperimentWrapper from "./ExperimentWrapper";

function Experiments() {
  return (
    <section id="experiments">
      <h3 className="text-4xl">Experiments</h3>
      {/* Spacing */}
      <div className="p-6"></div>
      <div className="flex justify-center items-center p-5">
        <ExperimentWrapper
          href="https://codepen.io/matteo1222-the-selector/pen/LYdYoVL"
          title="π"
          description="Generative art with p5.js"
        >
          <VideoWithFallback
            className="h-full"
            src={piWebm}
            fallback={piGif}
            alt="PI generative art"
            type="image/gif"
          />
        </ExperimentWrapper>
        {/* Spacing */}
        <div className="p-6"></div>
        <ExperimentWrapper
          href="https://codepen.io/matteo1222-the-selector/pen/oNqwjBq"
          title="Pink-Blue Planet"
          description="Created with CSS and SVG filter"
        >
          <VideoWithFallback
            className="h-full"
            src={pinkBluePlanetWebm}
            fallback={pinkBluePlanetGif}
            alt="Pink Blue Planet made with CSS and SVG filter"
            type="image/gif"
          />
        </ExperimentWrapper>

        {/* Spacing */}
        <div className="p-6"></div>
        <ExperimentWrapper
          href="https://codepen.io/matteo1222-the-selector/pen/mdxeEKo"
          title="Circles"
          description="Generative art with p5.js"
        >
          <VideoWithFallback
            className="h-full"
            src={circlesWebm}
            fallback={circlesGif}
            alt="Circles generative art"
            type="image/gif"
          />
        </ExperimentWrapper>
      </div>
    </section>
  );
}

export default Experiments;
