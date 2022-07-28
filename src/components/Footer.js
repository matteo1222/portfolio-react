import React from "react";

function Footer() {
  return (
    <footer
      id="footer"
      className="bg-black text-white flex flex-col items-center p-6"
    >
      <h2 className="text-sm bold">Created by Po-Hsiang Lu</h2>
      {/* Spacing */}
      <div className="p-4"></div>
      <div className="flex items-center">
        <div className="before:block before:absolute before:-inset-1 before:bg-white before:transition-transform before:origin-left before:scale-x-0 before:hover:scale-x-100 relative">
          <a
            className="text-white bold mix-blend-difference"
            href="https://www.linkedin.com/in/po-hsiang-lu-bb513b109/"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
        {/* Spacing */}
        <div className="p-4"></div>
        <div className="before:block before:absolute before:-inset-1 before:bg-white before:transition-transform before:origin-left before:scale-x-0 before:hover:scale-x-100 relative">
          <a
            className="text-white bold mix-blend-difference"
            href="https://twitter.com/matteolululu"
            rel="noopener noreferrer"
            target="_blank"
          >
            Twitter
          </a>
        </div>
        {/* Spacing */}
        <div className="p-4"></div>
        <div className="before:block before:absolute before:-inset-1 before:bg-white before:transition-transform before:origin-left before:scale-x-0 before:hover:scale-x-100 relative">
          <a
            className="text-white bold mix-blend-difference"
            href="https://github.com/matteo1222"
            rel="noopener noreferrer"
            target="_blank"
          >
            Github
          </a>
        </div>
        {/* Spacing */}
        <div className="p-4"></div>
        <div className="before:block before:absolute before:-inset-1 before:bg-white before:transition-transform before:origin-left before:scale-x-0 before:hover:scale-x-100 relative">
          <a
            className="text-white bold mix-blend-difference"
            href="https://codepen.io/matteo1222-the-selector"
            rel="noopener noreferrer"
            target="_blank"
          >
            CodePen
          </a>
        </div>
      </div>
      {/* Spacing */}
      <div className="p-4"></div>
      <address className="text-sm">matthewlu.tw@gmail.com</address>
    </footer>
  );
}

export default Footer;
