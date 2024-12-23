import React from 'react'
import { projectData } from '../constants/constant'

function Projects() {
  return (
    <section className='flex-col flex items-center justify-center gap-8 text-main'>
      <h2>Projects</h2>
      <p>Projects include Personal, OJT, and Work Experiences</p>
      <div className='max-w-screen-2xl w-full flex justify-center items-center flex-row flex-wrap gap-12'>
        {projectData.map((project, id) => (
          <div className="group relative bg-cover rounded-lg bg-center h-64 w-3/12 text-white flex items-center justify-center" style={{ backgroundImage: `url(${project.img})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 rounded-lg group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-lg font-bold">{project.title}</h2>
                <p>{project.desc}</p>
                <a href={project.link} target='_blank' rel='noreferrer' className="text-blue-400 underline">Learn More</a>
              </div>
            </div>
          </div>

        ))}
      </div>
    </section>
  )
}

export default Projects