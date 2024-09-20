import React from 'react';

export default function TrainingPlan() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-400 via-indigo-400 to-blue-400 flex flex-col items-center justify-center relative">
            <div className="max-w-screen-lg bg-white bg-opacity-90 shadow-lg rounded-lg p-8 relative z-10">
                <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Injury Prevention Training Plan</h1>
                
                {/* Introduction Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Introduction</h2>
                    <p className="text-lg text-gray-700 hover:translate-y-1 hover:scale-105 transition duration-300"> {/* Add hover:scale-105 and transition */}
                        Welcome to our comprehensive Injury Prevention Training Plan designed specifically for tennis players. This plan focuses on strengthening key muscle groups, improving flexibility, and enhancing agility to reduce the risk of injuries on and off the court.
                    </p>
                </section>

                {/* Video Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="flex flex-col items-center justify-center mb-8">
                        <iframe
                            className="w-full h-auto rounded-lg"
                            src="https://www.youtube.com/embed/_Li7Q0IVEvA?si=xeAO8LnJ1vNFIEAQ"
                            title="Injury Prevention Training Video 1"
                            allowFullScreen
                        ></iframe>
                        <p className="text-lg text-gray-700 mt-4 hover:translate-y-1 hover:scale-105 transition duration-300"> {/* Add hover:scale-105 and transition */}
                            Description or title for Video 1
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center mb-8">
                        <iframe
                            className="w-full h-auto rounded-lg"
                            src="https://www.youtube.com/embed/VIDEO_ID_2"
                            title="Injury Prevention Training Video 2"
                            allowFullScreen
                        ></iframe>
                        <p className="text-lg text-gray-700 mt-4 hover:translate-y-1 hover:scale-105 transition duration-300"> {/* Add hover:scale-105 and transition */}
                            Description or title for Video 2
                        </p>
                    </div>
                    {/* Add more video components as needed */}
                </section>

                {/* Exercise Plan Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Exercise Plan</h2>
                    <p className="text-lg text-gray-700 hover:translate-y-1 hover:scale-105 transition duration-300"> {/* Add hover:scale-105 and transition */}
                        Our Injury Prevention Training Plan consists of a variety of exercises targeting different muscle groups and movement patterns. Incorporate these exercises into your routine to build strength, improve flexibility, and enhance overall performance.
                    </p>
                    {/* Add detailed exercise descriptions and images */}
                </section>

                {/* Stretching Routine Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Stretching Routine</h2>
                    <p className="text-lg text-gray-700 hover:translate-y-1 hover:scale-105 transition duration-300"> {/* Add hover:scale-105 and transition */}
                        Flexibility is crucial for injury prevention and optimal performance in tennis. Follow our recommended stretching routine before and after your training sessions to increase flexibility, reduce muscle tension, and improve range of motion.
                    </p>
                    {/* Add detailed stretching exercises and images */}
                </section>

                {/* Interactive Features Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Interactive Features</h2>
                    <p className="text-lg text-gray-700 hover:translate-y-1 hover:scale-105 transition duration-300"> {/* Add hover:scale-105 and transition */}
                        Engage with our interactive features to track your progress, set goals, and connect with other tennis enthusiasts. Stay motivated and accountable on your injury prevention journey.
                    </p>
                    {/* Add interactive elements such as progress trackers, goal setting tools, and community forums */}
                </section>
            </div>
        </div>
    );
}
