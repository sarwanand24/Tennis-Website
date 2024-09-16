import React from 'react';
import img1 from '../../assets/img1.jpeg';
import img2 from '../../assets/img2.jpeg';

export default function About() {
    return (
        <div className="bg-gradient-to-b from-purple-600 to-indigo-900">
            <div className="flex flex-col items-center justify-center min-h-screen">
                <div className="max-w-4xl px-4 py-8 bg-white bg-opacity-90 shadow-lg rounded-lg">
                    <h1 className="text-4xl font-bold text-center mb-8 text-purple-900">About Me</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col justify-center items-center">
                            <img src={img1} alt="Tennis" className="rounded-lg mb-4 animate-bounce" />
                            <p className="text-gray-700 text-lg text-center">I was born in Pennsylvania and tennis is my passion. I play tennis smartly and I'm a nationally ranked junior in New Jersey. It's my favorite hobby and I put a lot of effort into it.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img src={img2} alt="Trophy" className="rounded-lg mb-4 animate-bounce" />
                            <p className="text-gray-700 text-lg text-center">I've won numerous tournaments and awards for my skills in tennis. It's not just a game for me, it's a way of life. The feeling of holding a trophy after a hard-fought match is indescribable.</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <img src="https://via.placeholder.com/800x400" alt="Tennis Court" className="w-full rounded-lg animate-pulse" />
                    </div>
                </div>
            </div>
        </div>
    );
}
