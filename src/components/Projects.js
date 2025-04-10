import React from 'react'
import { projectData } from '../constants/constant'

function Projects() {
  return (
    <section className='flex-col pb-0 mt-10 flex items-center justify-center gap-8 text-light-main dark:text-main relative' id='projects'>
      <h2 className='font-main text-2xl lg:text-4xl'>Projects</h2>
      <p className='font-secondary text-base text-center lg:text-lg text-light-secondary dark:text-secondary'>Projects include Personal, OJT, and Work Experiences</p>
      <div className='max-w-screen-2xl w-full flex justify-center items-center'>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-6 md:px-8'>
          <ul className='col-span-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto'>
            {projectData.map((project, id) => (
              <li
                key={id}
                className={`group relative bg-cover rounded-lg bg-center h-64 w-full text-white flex items-center justify-center ${
                  projectData.length % 2 === 1 && id === projectData.length - 1
                    ? 'sm:col-span-2 sm:col-start-1 sm:col-end-3 sm:justify-self-center sm:w-[calc(50%-0.75rem)]'
                    : ''
                  }`}
                style={{ backgroundImage: `url(${project.img})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 rounded-lg group-hover:opacity-100 md:group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center flex items-center justify-center gap-2 flex-col p-4">
                    <h2 className="text-lg font-main font-bold">{project.title}</h2>
                    <p className='font-secondary text-sm sm:text-base'>{project.desc}</p>
                    <div className='flex items-center justify-center px-3 py-2 rounded-md bg-light-accent dark:bg-accent hover:bg-light-accent/90 dark:hover:bg-accent/90 transition-colors gap-2'>
                      <a
                        href={project.link}
                        target='_blank'
                        rel='noreferrer'
                        className="text-light-tertiary dark:text-secondary font-secondary font-medium text-sm"
                      >
                        See More
                      </a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8l-8 8l-1.425-1.4z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Projects