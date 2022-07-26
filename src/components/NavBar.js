import React from "react";

const NavBar = () => {
  return (
    <nav className="px-4 lg:px-16">
      <ul className="flex h-20 items-center justify-end text-slate-500">
        <li className="mr-6">
          <a href="#projects">Projects</a>
        </li>
        <li className="mr-6">
          <a href="#experiments">Experiments</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
