import React from "react";

const Montioring = () => {
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">24/7 Monitoring</h3>
      <p className="text-gray-400">
        Round-the-clock surveillance and rapid response
      </p>
    </div>
  );
};

export default Montioring;
