import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import bgImg from "../../assets/Designer.png";

export default function Home() {
    const quotes = [
        "“Champions keep playing until they get it right.” – Billie Jean King",
        "“The more I practice, the luckier I get.” – Gary Player",
        "“You are never really playing an opponent. You are playing yourself, your own highest standards, and when you reach your limits, that is real joy.” – Arthur Ashe",
        "“Tennis is mostly mental. Of course, you must have a lot of physical skill, but you can’t play tennis well and not be a good thinker. You win or lose the match before you even go out there.” – Venus Williams",
        "“The fifth set is not about tennis, it’s about nerves.” – Boris Becker"
    ];

    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        }, 5000); // Change quote every 5 seconds
        return () => clearInterval(interval);
    }, [quotes.length]);

    return (
        <div className="relative min-h-screen flex items-center justify-center">
            <img
                src={bgImg}
                alt="Tennis Background"
                className="absolute inset-0 object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-25"></div>
            <div className="text-white text-center z-10 relative">
                <h1 className="text-5xl font-bold mb-4 transform hover:rotate-3 transition-transform duration-500">Welcome to Tennis World</h1>
                <p className="text-2xl mb-8 transition-opacity duration-500 hover:opacity-50">Your ultimate destination for all things tennis</p>
                <p className="text-xl mb-8 animate-fade">{quotes[currentQuoteIndex]}</p>
                <div className="flex justify-center">
                    <Link to="/explore" className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg mr-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">Explore Now</Link>
                    <Link to="/community" className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">Join the Community</Link>
                </div>
            </div>
        </div>
    );
}
