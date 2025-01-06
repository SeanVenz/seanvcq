import React from 'react'
import { experience } from '../constants/constant'

function Experience() {
    return (
        <section className='mt-10 pb-10 flex-col flex items-center justify-center gap-8 bg-tertiary text-main' id='experience'>

            <h2 className='text-2xl lg:text-4xl font-main mt-10'>Experience</h2>
            <div className='max-w-screen-md text-main w-full flex flex-col flex-wrap gap-10'>
                {experience.map((exp, id) => (
                    <div className='flex flex-row gap-4 '>
                        <div>
                            {/* <div className='px-2 font-secondary rounded-r-full py-1 bg-quaternary'>{exp.date}</div> */}
                        </div>
                        <div className='flex flex-col pr-8 lg:pr-0 lg:p-0'>
                            <div className='flex flex-row items-center gap-4'>
                                <div class="w-4 h-4 rounded-full bg-yellow-300 shadow-[0_0_40px_#FCD34D,0_0_20px_#FCD34D]"></div>
                                <h4 className='font-main text-lg lg:text-3xl font-bold'>{exp.position}</h4>
                            </div>
                            <div className='border-l-2 pl-6 ml-[7px] flex gap-4 flex-col'>
                                <div className='mt-2 flex text-base lg:text-xl italic font-medium font-secondary flex-row gap-3'>
                                    <h5>{exp.company}</h5>,
                                    <h6>{exp.location}</h6>
                                </div>
                                <p className='font-secondary text-justify text-sm lg:text-base'>{exp.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experience