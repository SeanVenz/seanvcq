import React from 'react'
import { about } from '../constants/constant'

function About() {
    return (
        <section className=' flex flex-col w-full items-center justify-center' id='about'>
            {about.map((text, id) => (
                <div className='max-w-screen-xl w-full text-main flex flex-col gap-2'>
                    <h2 className='text-3xl'>{text.header}</h2>
                    <div className='flex flex-row flex-wrap'>
                        {/* <div className='h-4 border border-white'></div> */}
                        <p className='w-11/12 text-lg'>{text.text}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default About