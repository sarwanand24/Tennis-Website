import React from 'react';

export default function Content() {
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Welcome to our Injury Prevention Website
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Helping kids adapt to a solid plan to prevent injuries and stay safe
                    </p>
                </div>

                <div className="mt-20">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Card 1 */}
                        <div className="bg-white overflow-hidden shadow rounded-lg">
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
                        <div className="bg-white overflow-hidden shadow rounded-lg">
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
                        <div className="bg-white overflow-hidden shadow rounded-lg">
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
            </div>
        </div>
    );
}
