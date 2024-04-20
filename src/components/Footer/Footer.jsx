import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-l from-blue-900 to-indigo-900 border-y py-8 relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                {[...Array(100)].map((_, index) => (
                    <div
                        key={index}
                        className="absolute animate-star"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: '2px',
                            height: '2px',
                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                            borderRadius: '50%',
                            animationDuration: `${Math.random() * 5 + 3}s`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationIterationCount: 'infinite',
                            animationTimingFunction: 'linear',
                            animationName: `moveStar${index}`,
                        }}
                    />
                ))}
            </div>
            <div className="mx-auto max-w-screen-xl p-4 lg:p-8 relative z-10">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://th.bing.com/th/id/R.b8458e894c393bb5b86c15434e45d4ed?rik=KRBrwYZ1byNAQA&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2ftennis-racquet-silhouette%2ftennis-racquet-silhouette-22.png&ehk=aZ01eiVGnt5CuPDYHfiiXW1WUKpsifybFFWvFuKgKC4%3d&risl=&pid=ImgRaw&r=0"
                                className="h-20"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        {/* Resources */}
                        <div className="text-gray-100">
                            <h2 className="mb-6 text-sm font-semibold uppercase transition-transform transform hover:-translate-y-1">
                                Resources
                            </h2>
                            <ul className="font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:text-white transition-colors duration-300">
                                        Home
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/about" className="hover:text-white transition-colors duration-300">
                                        About
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/contact" className="hover:text-white transition-colors duration-300">
                                        Contact
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/qna" className="hover:text-white transition-colors duration-300">
                                        QnA
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* Follow us */}
                        <div className="text-gray-100">
                            <h2 className="mb-6 text-sm font-semibold uppercase transition-transform transform hover:-translate-y-1">
                                Follow us
                            </h2>
                            <ul className="font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://www.instagram.com"
                                        className="hover:text-white transition-colors duration-300"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <Link to="/" className="hover:text-white transition-colors duration-300">
                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* Legal */}
                        <div className="text-gray-100">
                            <h2 className="mb-6 text-sm font-semibold uppercase transition-transform transform hover:-translate-y-1">
                                Legal
                            </h2>
                            <ul className="font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:text-white transition-colors duration-300">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:text-white transition-colors duration-300">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                {/* Copyright */}
                <div className="text-gray-100 text-sm sm:flex sm:items-center sm:justify-between">
                    <span className="block mb-4 sm:mb-0">
                        © 2024
                        <a href="https://www.google.com/" className="hover:text-white transition-colors duration-300">
                            agastyadewan
                        </a>
                        . All Rights Reserved.
                    </span>
                    {/* Social media icons */}
                    <div className="flex space-x-5 justify-center">
                        <Link to="#" className="text-gray-100 hover:text-white transition-colors duration-300">
                            <svg
                                className="w-4 h-4 animate-bounce"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </Link>
                        <Link to="#" className="text-gray-100 hover:text-white transition-colors duration-300">
                            <svg
                                className="w-4 h-4 animate-pulse"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 21 16"
                            >
                                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785a16.46 16.46 0 0 0 5.064-2.595a17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047a1.93 1.93 0 0 1-1.8 2.045zm6.644 0a1.94 1.94 0 0 1-1.8-2.045a1.93 1.93 0 0 1 1.8-2.047a1.918 1.918 0 0 1 1.8 2.047a1.93 1.93 0 0 1-1.8 2.045Z" />
                            </svg>
                            <span className="sr-only">Discord community</span>
                        </Link>
                        <Link to="#" className="text-gray-100 hover:text-white transition-colors duration-300">
                            <svg
                                className="w-4 h-4 animate-spin"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 17"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184a11.732 11.732 0 0 0 6.291 1.816a11.502 11.502 0 0 0 11.673-11.684c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
