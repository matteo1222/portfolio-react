import React from 'react'
import foodieClub from '../img/foodie-club.png'
import foodbag from '../img/foodbag.gif'
import { textContent } from '../constants/textContent'

function ProjectsLine() {
  return (
    <div id='projects' className='relative flex flex-col items-center'>
      <h5>Projects</h5>
      {/* The Straight Line */}
      <div className='absolute w-0 h-full mt-6 border border-slate-400'></div>
      {/* Project Blocks Container */}
      <div className='relative mt-12'>
        {/* Project Block - Foodie Club */}
        <div className='my-16 flex'>
          <div className='relative w-full md:w-2/3 h-96 shadow-lg'>
            <img
              src={foodieClub} 
              alt="Foodie Club Project Screenshot"
              className='w-full h-full object-cover object-left'
            />
            {/* Text Block in Small Screen */}
            <div className='md:hidden absolute top-0 flex flex-col items-start p-6 w-full h-full bg-slate-900 opacity-90'>
              <h4 className='text-white text-xl font-semibold my-2'>{textContent.projects.foodieClub.title}</h4>
              <h5 className='text-sky-500 text-left italic'>{textContent.projects.foodieClub.subtitle}</h5>
              <p className='text-white text-left my-8'>{textContent.projects.foodieClub.description}</p>
              {/* Tech Stack */}
              <div className='text-sky-500 flex flex-wrap justify-self-end text-xs'>
                {textContent.projects.foodieClub.techStacks.map(tech => <span className='mx-2'>{tech}</span>)}
              </div>
            </div>
          </div>
          {/* Text Block in Large Screen */}
          <div className='hidden md:block w-96 p-6'>
            <h4 className='text-slate-700 text-left text-2xl font-semibold my-2'>{textContent.projects.foodieClub.title}</h4>
            <h5 className='text-sky-800 text-left italic'>{textContent.projects.foodieClub.subtitle}</h5>
            <p className='text-slate-700 text-left my-8'>{textContent.projects.foodieClub.description}</p>
            {/* Tech Stack */}
            <div className='text-sky-800 flex flex-wrap justify-self-end text-xs'>
              {textContent.projects.foodieClub.techStacks.map(tech => <span className='mx-2'>{tech}</span>)}
            </div>
          </div>
        </div>
        {/* Project Block - FoodBag */}
        <div className='my-16 flex md:justify-center md:items-center'>
          <div className='order-2 relative w-full h-96 md:w-80 md:aspect-[1/2] md:mr-32 shadow-lg'>
            <img
              src={foodbag} 
              alt="Foodie Club Project Screenshot"
              className='w-full h-full object-cover object-left'
            />
            {/* Text Block in Small Screen */}
            <div className='md:hidden absolute top-0 flex flex-col items-start p-6 w-full h-full bg-slate-900 opacity-90'>
              <h4 className='text-white text-xl font-semibold my-2'>{textContent.projects.foodBag.title}</h4>
              <h5 className='text-sky-500 text-left italic'>{textContent.projects.foodBag.subtitle}</h5>
              <p className='text-white text-left my-8'>{textContent.projects.foodBag.description}</p>
              {/* Tech Stack */}
              <div className='text-sky-500 flex flex-wrap justify-self-end text-xs'>
                {textContent.projects.foodBag.techStacks.map(tech => <span className='mx-2'>{tech}</span>)}
              </div>
            </div>
          </div>
          {/* Text Block in Large Screen */}
          <div className='order-1 hidden md:block w-96 p-6'>
            <h4 className='text-slate-700 text-left text-2xl font-semibold my-2'>{textContent.projects.foodBag.title}</h4>
            <h5 className='text-sky-800 text-left italic'>{textContent.projects.foodBag.subtitle}</h5>
            <p className='text-slate-700 text-left my-8'>{textContent.projects.foodBag.description}</p>
            {/* Tech Stack */}
            <div className='text-sky-800 flex flex-wrap justify-self-end text-xs'>
              {textContent.projects.foodBag.techStacks.map(tech => <span className='mx-2'>{tech}</span>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsLine