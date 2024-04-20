import React from 'react';

export default function General() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-red-400 via-yellow-400 to-green-400 flex flex-col items-center justify-center">
            <div className="max-w-screen-lg bg-white bg-opacity-90 shadow-lg rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 animate-bounce">Welcome to Our Injury Prevention Guide</h1>
                <div className="flex justify-center mb-8"> {/* Add animation class */}
                      <img
                        src="https://via.placeholder.com/500"
                        alt="Injury Prevention"
                        className="rounded-lg"
                    />
                </div>
                <p className="text-lg text-gray-700 mb-8 animate-fade-in"> {/* Add animation class */}
                    Injuries aren't just painful; they can be debilitating, affecting your daily life and passions. We're here to help kids and young athletes develop solid injury prevention strategies, ensuring they stay safe and healthy.
                </p>
                <p className="text-lg text-gray-700 mb-8 animate-fade-in"> {/* Add animation class */}
                    Understanding how injuries occur is key. Whether on the field, playground, or at home, knowing how to identify and avoid risks is crucial to staying injury-free.
                </p>
                <p className="text-lg text-gray-700 mb-8 animate-fade-in"> {/* Add animation class */}
                    Through educational resources, practical tips, and interactive tools, we aim to empower you with the knowledge and skills needed to reduce injury risks and stay active for years to come.
                </p>
                <div className="flex justify-center mb-8"> {/* Add animation class */}
                       <img
                        src="https://via.placeholder.com/500"
                        alt="Injury Prevention"
                        className="rounded-lg"
                    />
                </div>
                <p className="text-lg text-gray-700 animate-fade-in"> {/* Add animation class */}
                    Join us on this journey to a safer, healthier future. Together, we can build a community that prioritizes injury prevention and promotes lifelong wellness.
                </p>
            </div>
        </div>
    );
}
