import React from 'react'
import { experience } from '../constants/constant'

function Experience() {
    return (
        <section className='flex-col flex items-center justify-center gap-8 bg-tertiary text-main' id='experience'>

            <h2 className='text-2xl'>Experience</h2>
            <div className='max-w-screen-md text-main w-full flex flex-col flex-wrap gap-10'>
                {experience.map((exp, id) => (
                    <div className='flex flex-row gap-4 '>
                        <div>
                            <div className='px-2 rounded-r-[500px] py-1 bg-quaternary'>{exp.date}</div>
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex flex-row items-center gap-4'>
                                <div class="w-4 h-4 rounded-full bg-yellow-300 shadow-[0_0_40px_#FCD34D,0_0_20px_#FCD34D]"></div>
                                <h4>{exp.position}</h4>
                            </div>
                            <div className='border-l-2 pl-6 ml-[7px] flex flex-col'>
                                <h5>{exp.company}</h5>
                                <h6>{exp.location}</h6>
                                <p>{exp.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experience