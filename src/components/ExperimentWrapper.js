import React from "react";

function ExperimentWrapper({ children, href, title, description }) {
  return (
    <article>
      <a
        className="cursor-pointer mx-2 relative w-80 h-80 flex flex-col items-center group rounded-md overflow-hidden"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {/* <div className="absolute top-0 left-0 w-full h-full bg-slate-500 opacity-0 group-hover:opacity-25"></div> */}
        <div className="w-60 h-60 mt-4 rounded-full overflow-hidden shadow-lg group-hover:scale-105 transition-transform bg-black">
          {children}
        </div>
        <div className="p-2"></div>
        <h4 className="text-xl bold text-left">{title}</h4>
        <p className="text-left">{description}</p>
      </a>
    </article>
  );
}

export default ExperimentWrapper;
