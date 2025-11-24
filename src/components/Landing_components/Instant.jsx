import React from "react";

const Instant = () => {
  return (
    <>
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
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Instant Detection</h3>
        <p className="text-gray-400">Real-time accident detection </p>
      </div>
    </>
  );
};

export default Instant;
