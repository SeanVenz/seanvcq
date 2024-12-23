import React from 'react'
import { about } from '../constants/constant'

function About() {
    return (
        <div className=' flex flex-col w-full items-center justify-center'>
            {about.map((text, id) => (
                <div className=' max-w-5xl text-main'>
                    <h2>{text.header}</h2>
                    <div className='flex flex-row flex-wrap'>
                        <div className='h-2 border-b-2 border-accent'></div>
                        <p className=''>{text.text}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default About