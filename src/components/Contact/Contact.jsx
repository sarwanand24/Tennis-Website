import React from 'react';

export default function Contact() {
    return (
        <div className="relative flex items-top justify-center min-h-[700px] bg-gradient-to-b from-orange-400 via-pink-400 to-red-500 sm:items-center sm:pt-0">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
                            <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight mb-4">
                                Get in touch
                            </h1>
                            <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mb-6">
                                Fill in the form to start a conversation
                            </p>

                            <div className="flex items-center text-gray-600 mb-4">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500 mr-3"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <div className="text-md tracking-wide font-semibold">
                                    New Jersey,Street, State, Postal Code
                                </div>
                            </div>

                            <div className="flex items-center text-gray-600 mb-4">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500 mr-3"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <div className="text-md tracking-wide font-semibold">
                                    +44 1234567890
                                </div>
                            </div>

                            <div className="flex items-center text-gray-600 mb-4">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500 mr-3"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <div className="text-md tracking-wide font-semibold">
                                aggyd117@gmail.com
                                </div>
                            </div>
                        </div>

                        <form className="p-6 flex flex-col justify-center">
                            <div className="flex flex-col mb-4">
                                <label htmlFor="name" className="sr-only">
                                    Full Name
                                </label>
                                <input
                                    type="name"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    className="bg-gray-100 border border-gray-400 py-3 px-4 rounded-lg text-gray-800 focus:outline-none focus:border-orange-500"
                                />
                            </div>

                            <div className="flex flex-col mb-4">
                                <label htmlFor="email" className="sr-only">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="bg-gray-100 border border-gray-400 py-3 px-4 rounded-lg text-gray-800 focus:outline-none focus:border-orange-500"
                                />
                            </div>

                            <div className="flex flex-col mb-6">
                                <label htmlFor="tel" className="sr-only">
                                    Number
                                </label>
                                <input
                                    type="tel"
                                    name="tel"
                                    id="tel"
                                    placeholder="Telephone Number"
                                    className="bg-gray-100 border border-gray-400 py-3 px-4 rounded-lg text-gray-800 focus:outline-none focus:border-orange-500"
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition ease-in-out duration-300"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
