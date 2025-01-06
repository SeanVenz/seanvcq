import React, { useState } from 'react'
import { contact, socialLinks } from '../constants/constant'
import { sendEmail } from '../actions';

function Contact() {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const year = new Date().getFullYear();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!formData.name || !formData.email || !formData.message) {
            setError("Please fill in all required fields");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError("Please enter a valid email address");
            return;
        }

        try {
            setIsLoading(true);
            const templateParams = {
                name: formData.name,
                email: formData.email,
                message: formData.message
            };

            const response = await sendEmail(templateParams, setSuccess, setError, setIsLoading);

            if (response) {
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
            }
        } catch (error) {
            console.error("Submission error:", error);
            setError("An unexpected error occurred");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className='flex-col pt-20 flex items-center justify-center gap-8 bg-tertiary text-main' id='contact'>

            <div class="flex items-center w-full text-white text-5xl font-bold py-4">
                <div class="h-[2px] bg-accent flex-grow"></div>
                <h1 class="lg:px-8 px-4 font-main text-2xl lg:text-4xl">Contact Me</h1>
                <div class="h-[2px] bg-accent flex-grow"></div>
            </div>
            <div className='max-w-screen-md mt-4 text-main w-full flex flex-col flex-wrap gap-10'>
                <div className='flex mb-4 flex-wrap flex-row gap-4 justify-center items-center'>
                    {contact.map((con, index) => (
                        <div className='flex w-72 flex-row gap-4 items-center justify-center px-5 py-3 bg-main rounded-md'>
                            {con.icon} <span className='text-accent'>{con.text}</span>
                        </div>
                    ))}
                </div>

                <form
                    onSubmit={handleSubmit}
                    action="#"
                    className="space-y-4 sm:space-y-10 p-4 lg:p-0"
                >
                    <div className="flex flex-col gap-4">
                        <div className="w-full">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-main"
                            >
                                Name
                            </label>
                            <div className="bg-transparent flex items-center border border-accent rounded-md px-4 py-3">
                                <div className="flex items-center border-r border-slate-500 pr-1 mr-3">
                                    <svg
                                        className="w-5 h-5 mr-3 "
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z"
                                            fill="#FCFCFC"
                                        />
                                        <path
                                            d="M19 20H1C0.447715 20 0 19.5523 0 19C0 15.134 3.13402 12 7 12H13C16.866 12 20 15.134 20 19C20 19.5523 19.5523 20 19 20Z"
                                            fill="#FCFCFC"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="flex-1 border-none outline-none bg-tertiary text-main placeholder:text-main text-base"
                                    placeholder="john doe"
                                />
                            </div>
                        </div>

                        <div className="w-full">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-main"
                            >
                                Email
                            </label>
                            <div className="bg-transparent flex items-center border border-accent rounded-md px-4 py-3">
                                <div className="flex items-center border-r border-slate-500 pr-1 mr-3">
                                    <svg
                                        className="w-5 h-5 mr-3 text-gray-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        {" "}
                                        <path
                                            fill="#FCFCFC"
                                            d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12v1.45q0 1.475-1.012 2.513T18.5 17q-.875 0-1.65-.375t-1.3-1.075q-.725.725-1.638 1.088T12 17q-2.075 0-3.537-1.463T7 12t1.463-3.537T12 7t3.538 1.463T17 12v1.45q0 .65.425 1.1T18.5 15t1.075-.45t.425-1.1V12q0-3.35-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20h4q.425 0 .713.288T17 21t-.288.713T16 22zm0-7q1.25 0 2.125-.875T15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="flex-1 border-none outline-none bg-tertiary text-main placeholder:text-main text-base"
                                    placeholder="sample@gmail.com"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2 pt-0">
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-main"
                            >
                                Message
                            </label>
                            <div className="flex items-start border border-accent rounded-md px-4 py-3 bg-transparent">
                                <div className="flex items-center border-r pr-4 mr-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <g fill="none" fill-rule="evenodd">
                                            <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                            <path
                                                fill="#FCFCFC"
                                                d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-7.667L8 21.5c-.824.618-2 .03-2-1V19H5a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1.5A1.5 1.5 0 0 1 8 18.5v.5l2.133-1.6a2 2 0 0 1 1.2-.4H19a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
                                            />
                                        </g>
                                    </svg>
                                </div>
                                <textarea
                                    id="message"
                                    rows={8}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="flex-1 border-none outline-none bg-tertiary text-main placeholder:text-main text-base"
                                    placeholder="Detail your inquiry"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    {error && (
                        <div className="bg-red-200 text-red-500 gap-2 rounded-md p-3 border border-red-500 border-dotted flex flex-row items-center">
                            <span className="text-red-500 text-sm sm:text-base">{error}</span>
                        </div>
                    )}
                    {success && (
                        <div className="bg-green-50 text-green-500 gap-2 rounded-md p-3 border border-green-500 border-dotted flex flex-row items-center">
                            <span className="text-green-500 sm:text-base text-sm">
                                Your message has been sent!
                            </span>
                        </div>
                    )}
                    <div className="flex justify-end pt-4 md:pt-0">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`bg-main px-10 py-3 text-accent rounded-lg hover:bg-accent hover:text-tertiary transition-all duration-300 ease-in-out flex items-center justify-center ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {isLoading ? (
                                <>
                                    <svg
                                        className="animate-spin -ml-1 mr-3 h-5 w-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                "Submit"
                            )}
                        </button>
                    </div>
                </form>
            </div>
            <div class="flex items-center w-full text-white text-5xl font-bold py-4">
                <div class="h-[2px] bg-accent flex-grow"></div>
                <div className='flex flex-row gap-4 pl-4 pr-4'>
                {socialLinks.map((link, id) => (
                    <ul key={id}>
                        <li className='rounded-full hover:scale-125 transition-all duration-300 ease-in-out'><a href={link.link} target='_blank' rel='noreferrer'>{link.logo}</a></li>
                    </ul>
                ))}
                </div>
                <div class="h-[2px] bg-accent flex-grow"></div>
            </div>
            <p className='pb-2'>© {year} Sean Venz Quijano | All Rights Reserved</p>
        </section>
    )
}

export default Contact