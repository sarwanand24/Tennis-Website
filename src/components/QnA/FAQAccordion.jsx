import React, { useState } from 'react';

const FAQAccordion = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-lg mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <div
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center cursor-pointer bg-gray-100 rounded-lg px-4 py-3 md:px-6 md:py-4 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <h3 className="text-lg font-semibold">{faq.question}</h3>
            {activeIndex === index ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600 transform rotate-180 md:rotate-0 transition-transform duration-300 ease-in-out"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600 transform transition-transform duration-300 ease-in-out"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </div>
          {activeIndex === index && (
            <div className="bg-white rounded-lg px-4 py-3 mt-2 shadow-md">
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
