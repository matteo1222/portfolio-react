import React from 'react'
import foodieClub from '../img/foodie-club.png'
import foodbag from '../img/foodbag.gif'

function ProjectsLine() {
  return (
    <div id='projects' className='relative flex flex-col items-center'>
      <h5>Projects</h5>
      {/* The Straight Line */}
      <div className='absolute w-0 h-full mt-6 border border-slate-400'></div>
      {/* Project Blocks Container */}
      <div className='relative mt-12'>
        {/* Project Block */}
        <div className='my-16 flex'>
          <div className='relative w-full md:w-2/3 h-96 shadow-lg'>
            <img
              src={foodieClub} 
              alt="Foodie Club Project Screenshot"
              className='w-full h-full object-cover object-left'
            />
            {/* Text Block in Small Screen */}
            <div className='md:hidden absolute top-0 flex flex-col items-start p-6 w-full h-full bg-slate-900 opacity-90'>
              <h4 className='text-white text-xl font-semibold my-2'>Foodie Club</h4>
              <h5 className='text-white text-left italic'>A Platform for matching groups of foodies to dine together</h5>
              <p className='text-white text-left my-8'>A web app for finding foodies with similar taste and dine together. Create groups by selecting your favorite restaurants and pick a date and time. Or join groups initated by others. Use the group chat to confirm details.</p>
              {/* Tech Stack */}
              <div className='text-white flex flex-wrap justify-self-end text-xs'>
                <span className='mx-2'>React</span>
                <span className='mx-2'>FeathersJS</span>
                <span className='mx-2'>MaterialUI</span>
                <span className='mx-2'>PostgreSQL</span>
              </div>
            </div>
          </div>
          {/* Text Block in Large Screen */}
          <div className='hidden md:block w-96 p-6'>
            <h4 className='text-left text-xl font-semibold my-2'>Foodie Club</h4>
            <h5 className='text-left italic'>A Platform for matching groups of foodies to dine together</h5>
            <p className='text-left my-8'>A web app for finding foodies with similar taste and dine together. Create groups by selecting your favorite restaurants and pick a date and time. Or join groups initated by others. Use the group chat to confirm details.</p>
            {/* Tech Stack */}
            <div className='flex flex-wrap justify-self-end text-xs'>
              <span className='mx-2'>React</span>
              <span className='mx-2'>FeathersJS</span>
              <span className='mx-2'>MaterialUI</span>
              <span className='mx-2'>PostgreSQL</span>
            </div>
          </div>
        </div>
        {/* Project Block */}
        <div className='my-16'>
          <div className='relative w-full h-96 shadow-lg'>
            <img
              src={foodbag} 
              alt="Foodie Club Project Screenshot"
              className='w-full h-full object-cover object-left'
            />
            {/* Text Block in Small Screen */}
            <div className='md:hidden absolute top-0 flex flex-col items-start p-6 w-full h-full bg-slate-900 opacity-90'>
              <h4 className='text-white text-xl font-semibold my-2'>FoodBag (Ongoing Development)</h4>
              <h5 className='text-white text-left italic'>A Platform for matching groups of foodies to dine together</h5>
              <p className='text-white text-left my-8'>A web app for finding foodies with similar taste and dine together. Create groups by selecting your favorite restaurants and pick a date and time. Or join groups initated by others. Use the group chat to confirm details.</p>
              {/* Tech Stack */}
              <div className='text-white flex flex-wrap justify-self-end text-xs'>
                <span className='mx-2'>React Native</span>
                <span className='mx-2'>AWS Amplify</span>
              </div>
            </div>
          </div>
          {/* Text Block in Large Screen */}
        </div>
      </div>
    </div>
  )
}

export default ProjectsLine