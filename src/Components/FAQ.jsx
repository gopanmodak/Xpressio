import React, { useEffect, useState } from 'react';

const FAQ = () => {
  
  const [faqData, setFaqData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await fetch('/FAQ.json');
        if (!response.ok) {
          throw new Error('Failed to load FAQ data');
        }
        const data = await response.json();
        setFaqData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

 
  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  
  if (loading) {
    return (
      <div className="max-w-3xl mx-auto p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Frequently Asked Questions
        </h2>
       
        {[...Array(4)].map((_, i) => (
          <div key={i} className="border border-gray-200 rounded-xl shadow-sm mb-4 p-6 animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    );
  }


  if (error) {
    return (
      <div className="max-w-3xl mx-auto p-8 text-center">
        <div className="bg-red-50 border border-red-200 text-red-600 p-6 rounded-xl">
          <p className="font-semibold">⚠️ {error}</p>
          <p className="text-sm mt-2">Please refresh the page or try again later.</p>
        </div>
      </div>
    );
  }


  return (
    <div className="max-w-3xl mx-auto px-4 py-8 md:py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-gray-500 mb-10">
        Find answers to the most common questions below.
      </p>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={item.id || index}
            className="border border-gray-200 rounded-xl shadow-sm overflow-hidden bg-white transition-all duration-200 hover:shadow-md"
          >
            {/* -------- QUESTION  -------- */}
            <button
              onClick={() => handleToggle(index)}
              className="w-full flex justify-between items-center px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset"
              aria-expanded={activeIndex === index}
            >
              <span className="text-base md:text-lg font-semibold text-gray-800 pr-8">
                {item.question}
              </span>
              
              {/* Plus / Minus Icon */}
              <span className="shrink-0 ml-4 p-1 rounded-full bg-indigo-50 text-indigo-600 transition-all duration-300">
                {activeIndex === index ? (
                  // Minus icon (close)
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 10a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  // Plus icon (open)
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                )}
              </span>
            </button>

            {/* -------- ANSWER  -------- */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index ? 'max-h-150 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-100">
                <p className="text-base">{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;