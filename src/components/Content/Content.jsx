import React from 'react';

export default function Content() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-red-900 via-purple-900 to-black py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        Welcome to our Injury Prevention Website
                    </h2>
                    <p className="mt-4 text-lg text-white">
                        Helping kids adapt to a solid plan to prevent injuries and stay safe
                    </p>
                </div>

                <div className="mt-20">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Card 1 */}
                        <div className="bg-white overflow-hidden shadow rounded-lg animate-fade-in">
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Why Injury Prevention Matters
                                </h3>
                                <p className="mt-2 text-sm text-gray-600">
                                    Learn about the importance of preventing injuries and how it can benefit kids in the long run.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white overflow-hidden shadow rounded-lg animate-fade-in" style={{animationDelay: '100ms'}}>
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    How Injuries Occur
                                </h3>
                                <p className="mt-2 text-sm text-gray-600">
                                    Understand the common causes of injuries in kids and the steps you can take to avoid them.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white overflow-hidden shadow rounded-lg animate-fade-in" style={{animationDelay: '200ms'}}>
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Stay Active, Stay Safe
                                </h3>
                                <p className="mt-2 text-sm text-gray-600">
                                    Discover fun and safe activities that kids can engage in to maintain an active lifestyle while minimizing the risk of injuries.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Content Section */}
                <div className="mt-20">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                            Tips for Injury Prevention
                        </h2>
                        <p className="mt-4 text-lg text-white">
                            Explore some practical tips to keep your kids safe and injury-free.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8">
                        {/* Tip 1 */}
                        <div className="bg-white overflow-hidden shadow rounded-lg animate-fade-in">
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Warm Up Properly
                                </h3>
                                <p className="mt-2 text-sm text-gray-600">
                                    Encourage your kids to warm up before any physical activity to prevent muscle strains and injuries.
                                </p>
                            </div>
                        </div>

                        {/* Tip 2 */}
                        <div className="bg-white overflow-hidden shadow rounded-lg animate-fade-in" style={{animationDelay: '100ms'}}>
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Wear Protective Gear
                                </h3>
                                <p className="mt-2 text-sm text-gray-600">
                                    Ensure your kids wear appropriate protective gear, such as helmets and pads, for sports and other high-risk activities.
                                </p>
                            </div>
                        </div>

                        {/* Tip 3 */}
                        <div className="bg-white overflow-hidden shadow rounded-lg animate-fade-in" style={{animationDelay: '200ms'}}>
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Stay Hydrated
                                </h3>
                                <p className="mt-2 text-sm text-gray-600">
                                    Remind your kids to drink plenty of water before, during, and after physical activity to prevent dehydration and muscle cramps.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
