import React from 'react'
import { skillsData } from '../constants/constant'

function Skills() {
    return (
        <section className='flex-col flex items-center justify-center gap-8 text-light-main dark:text-main bg-light-main dark:bg-main pt-0 relative transition-colors duration-300' id='skills'>
            <h5 className='text-2xl lg:text-4xl font-main pt-10'>My Skills</h5>
            <div className='max-w-screen-xl w-full flex justify-center md:px-4 2xl:px-0 items-center flex-row flex-wrap gap-10 pb-10'>
                {skillsData.map((skill, id) => (
                    <div key={id} className='group bg-light-secondary/80 hover:text-secondary dark:bg-tertiary/80 hover:bg-light-main dark:hover:bg-secondary hover:scale-110 transition-all duration-300 backdrop-blur-sm ease-in-out rounded-3xl gap-4 p-10 lg:p-20 flex flex-col items-center justify-center'>
                        <div className='w-16 lg:w-32 h-auto'>{skill.logo}</div>
                        <span className='font-secondary text-base lg:text-lg text-light-tertiary dark:text-main group-hover:text-light-main dark:group-hover:text-secondary transition-colors duration-300'>{skill.name}</span>
                    </div>
                ))} 
            </div>
        </section>
    )
}

export default Skills