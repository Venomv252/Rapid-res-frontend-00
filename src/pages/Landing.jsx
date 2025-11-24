import React from "react";
import { NavLink } from "react-router-dom";
import Line from "../components/line";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900">
      {/* <Line /> */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Smart Emergency Response.<br />
            <span className="text-blue-400">Instantly.</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Automatically detecting accidents, assessing severity, and dispatching aid in real-time to save lives when every second counts.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <NavLink to="/signup" className="w-full sm:w-auto">
              <button className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105">
                Get Started
              </button>
            </NavLink>
            {/* <NavLink to="/login" className="w-full sm:w-auto">
              <button className="w-full px-8 py-4 bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-900/30 font-semibold rounded-lg transition-all duration-200">
                Sign In
              </button>
            </NavLink> */}
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-900/30 backdrop-blur-sm p-6 rounded-xl border border-blue-800/50">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Instant Detection</h3>
              <p className="text-gray-400">Real-time accident detection </p>
            </div>
            
            <div className="bg-blue-900/30 backdrop-blur-sm p-6 rounded-xl border border-blue-800/50">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Smart Dispatch</h3>
              <p className="text-gray-400">Automated emergency service routing based on severity</p>
            </div>
            
            <div className="bg-blue-900/30 backdrop-blur-sm p-6 rounded-xl border border-blue-800/50">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">24/7 Monitoring</h3>
              <p className="text-gray-400">Round-the-clock surveillance and rapid response</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
