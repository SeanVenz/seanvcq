import { about } from '../constants/constant'

function About() {
    return (
        <section className=' flex flex-col w-full items-center justify-center' id='about'>
            {about.map((text, id) => (
                <div className='lg:max-w-screen-xl max-w-screen-sm w-full px-8 text-center md:text-start lg:py-0 text-main flex flex-col gap-2' key={id}>
                    <h2 className='text-2xl text-light-main dark:text-main lg:text-4xl text-center lg:text-start font-main'>{text.header}</h2>
                    <div className='flex mt-2 flex-row items-start justify-center lg:justify-start gap-4 flex-wrap'>
                        <div className='w-12 lg:mt-4 border-b-2 border-accent'></div>
                        <p className='w-11/12 font-secondary text-base lg:text-lg text-light-main dark:text-main'>{text.text}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default About