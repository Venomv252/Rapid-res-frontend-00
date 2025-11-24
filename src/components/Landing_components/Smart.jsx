import React from "react";

const Smart = () => {
  return (
    <div className="bg-blue-900/30 backdrop-blur-sm p-6 rounded-xl border border-blue-800/50">
      <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
          />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">Smart Dispatch</h3>
      <p className="text-gray-400">
        Automated emergency service routing based on severity
      </p>
    </div>
  );
};

export default Smart;
