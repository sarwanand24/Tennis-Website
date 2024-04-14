import React from 'react';

export default function General() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-300 to-gray-500 flex flex-col items-center justify-center">
            <div className="max-w-screen-lg bg-white bg-opacity-90 shadow-lg rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Welcome to Our Injury Prevention Guide</h1>
                <div className="flex justify-center mb-8">
                    <img
                        src="https://via.placeholder.com/500"
                        alt="Injury Prevention"
                        className="rounded-lg animate-fade-in-up"
                    />
                </div>
                <p className="text-lg text-gray-700 mb-8">
                    Injuries are not just painful; they can also be debilitating, affecting your ability to perform daily activities and pursue your passions. Our website is dedicated to helping kids and young athletes like you develop solid injury prevention strategies to stay safe and healthy.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                    Understanding how injuries occur is the first step in preventing them. Whether you're on the sports field, playground, or at home, knowing how to identify and avoid potential risks is crucial.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                    Through a combination of educational resources, practical tips, and interactive tools, we aim to empower you with the knowledge and skills needed to reduce the risk of injuries and stay active for years to come.
                </p>
                <div className="flex justify-center mb-8">
                    <img
                        src="https://via.placeholder.com/500"
                        alt="Stay Safe"
                        className="rounded-lg animate-fade-in-up"
                    />
                </div>
                <p className="text-lg text-gray-700">
                    Join us on this journey to a safer, healthier future. Together, we can build a community that prioritizes injury prevention and promotes lifelong wellness.
                </p>
            </div>
        </div>
    );
}
