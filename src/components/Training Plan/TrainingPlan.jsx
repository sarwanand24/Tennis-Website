import React from 'react';

export default function TrainingPlan() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-300 to-gray-500 flex flex-col items-center justify-center">
            <div className="max-w-screen-lg bg-white bg-opacity-90 shadow-lg rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Injury Prevention Training Plan</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col items-center justify-center mb-8">
                        <iframe
                            className="w-full h-auto rounded-lg"
                            src="https://www.youtube.com/embed/VIDEO_ID_1"
                            title="Injury Prevention Training Video 1"
                            allowFullScreen
                        ></iframe>
                        <p className="text-lg text-gray-700 mt-4">
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
                        <p className="text-lg text-gray-700 mt-4">
                            Description or title for Video 2
                        </p>
                    </div>
                    {/* Add more video components as needed */}
                </div>
            </div>
        </div>
    );
}
