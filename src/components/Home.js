import React from 'react'
import { socialLinks } from '../constants/constant'

function Home() {
    return (
        <section className='flex items-center justify-center h-screen' id='home'>
            <div className='max-w-screen-2xl flex items-center justify-center w-full'>
                <div className='flex flex-col gap-6'>
                    <h1 className='text-4xl text-main font-main'>I'M <span className='text-accent text-5xl'>SEAN QUIJANO</span></h1>
                    <p className='text-main text-3xl font-secondary'>Junior Full-Stack Developer</p>
                    <a href='#contact' className='font-secondary py-3 px-5 mt-2 w-max rounded-md border-2 text-accent border-accent hover:bg-accent hover:text-main transition-all duration-300 ease-in-out'>Contact Me</a>
                </div>
                    {/* <img src={logo} alt="Banner" /> */}
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <div className='h-32 border-r-2 border-accent'></div>
                        {socialLinks.map((link, id) => (
                            <ul key={id}>
                                <li className='rounded-full hover:scale-125 transition-all duration-300 ease-in-out'><a href={link.link} target='_blank' rel='noreferrer'>{link.logo}</a></li>
                            </ul>
                        ))}
                </div>
            </div>
        </section>
    )
}

export default Home