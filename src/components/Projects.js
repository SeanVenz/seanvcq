import React from 'react'
import { projectData } from '../constants/constant'

function Projects() {
  return (
    <section className='flex-col flex items-center justify-center gap-8 text-main' id='projects'>
      <h2>Projects</h2>
      <p>Projects include Personal, OJT, and Work Experiences</p>
      <div className='max-w-screen-2xl w-full flex justify-center items-center flex-row flex-wrap gap-12'>
        {projectData.map((project, id) => (
          <div className="group relative bg-cover rounded-lg bg-center h-64 w-3/12 text-white flex items-center justify-center" style={{ backgroundImage: `url(${project.img})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 rounded-lg group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="text-center flex items-center justify-center gap-2 flex-col">
                <h2 className="text-lg font-bold">{project.title}</h2>
                <p>{project.desc}</p>
                <div className='flex items-center justify-center px-2 py-1 rounded-md bg-accent hover:underline gap-1'>
                  <a href={project.link} target='_blank' rel='noreferrer' className=" text-secondary  font-medium text-sm">See More </a>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                    <path fill="#5B5C60" d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8l-8 8l-1.425-1.4z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

        ))}
      </div>
    </section>
  )
}

export default Projects