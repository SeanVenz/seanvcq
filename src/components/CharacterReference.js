import React from 'react';
import { characterReference } from '../constants/constant';

const CharacterReference = () => {
    return (
        <section className='flex-col pb-0 mt-10 flex items-center px-[7%] sm:px-0 justify-center gap-8 text-light-main dark:text-main' id="references">
            <div className="text-center">
                <h2 className="text-2xl lg:text-4xl font-main text-light-main dark:text-main mb-4">
                    Character References
                </h2>
                <p className="font-secondary text-base lg:text-lg text-light-secondary dark:text-secondary text-center max-w-2xl mx-auto">
                    Professional references who can speak to my character and work ethic
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-xl">
                {characterReference.map((reference, index) => (
                    <div
                        key={index}
                        className="bg-light-secondary dark:bg-secondary rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 border border-light-tertiary dark:border-tertiary"
                    >
                        <div className="text-center">
                            {/* Avatar Placeholder */}
                            <div className="w-20 h-20 bg-light-accent dark:bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-light-main dark:text-main text-xl font-main font-bold">
                                    {reference.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                </span>
                            </div>

                            {/* Name */}
                            <h3 className="text-xl font-main font-semibold text-light-main dark:text-main mb-2">
                                {reference.name}
                            </h3>

                            {/* Position */}
                            <p className="text-light-accent dark:text-accent font-secondary font-medium mb-4">
                                {reference.position}
                            </p>

                            {/* Contact Information */}
                            <div className="space-y-3">
                                {/* Email */}
                                <div className="flex items-center justify-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                        <path 
                                            className="fill-light-tertiary dark:fill-tertiary" 
                                            d="M7 17q-.825 0-1.412-.587T5 15V5q0-.825.588-1.412T7 3h14q.825 0 1.413.588T23 5v10q0 .825-.587 1.413T21 17zm7-4.7L7 7.425V15h14V7.425zm0-2.45L21 5H7zM3 21q-.825 0-1.412-.587T1 19V6.5h2V19h16.5v2zM21 7.35V5H7v2.35V5h14z" 
                                        />
                                    </svg>
                                    <a 
                                        href={`mailto:${reference.email}`}
                                        className="text-sm font-secondary text-light-secondary dark:text-secondary hover:text-light-accent dark:hover:text-accent transition-colors duration-200 break-all"
                                    >
                                        {reference.email}
                                    </a>
                                </div>

                                {/* Phone */}
                                <div className="flex items-center justify-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                        <path 
                                            className="fill-light-tertiary dark:fill-tertiary" 
                                            d="M4.05 21q-.45 0-.75-.3t-.3-.75V15.9q0-.325.225-.587t.575-.363l3.45-.7q.35-.05.713.063t.587.337L10.9 17q.95-.55 1.8-1.213t1.625-1.437q.825-.8 1.513-1.662t1.187-1.788L14.6 8.45q-.2-.2-.275-.475T14.3 7.3l.65-3.5q.05-.325.325-.562T15.9 3h4.05q.45 0 .75.3t.3.75q0 3.125-1.362 6.175t-3.863 5.55t-5.55 3.863T4.05 21" 
                                        />
                                    </svg>
                                    <a 
                                        href={`tel:${reference.phoneNumber}`}
                                        className="text-sm font-secondary text-light-secondary dark:text-secondary hover:text-light-accent dark:hover:text-accent transition-colors duration-200"
                                    >
                                        {reference.phoneNumber}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CharacterReference;