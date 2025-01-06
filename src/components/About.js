import React from 'react'
import { about } from '../constants/constant'

function About() {
    return (
        <section className=' flex flex-col w-full items-center justify-center' id='about'>
            {about.map((text, id) => (
                <div className='max-w-screen-xl w-full text-main flex flex-col gap-2'>
                    <h2 className='text-4xl font-main'>{text.header}</h2>
                    <div className='flex mt-2 flex-row items-start gap-4 flex-wrap'>
                        <div className='w-12 mt-4 border-b-2 border-accent'></div>
                        <p className='w-11/12 font-secondary text-lg'>{text.text}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default About