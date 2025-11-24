import React from "react";
import { NavLink } from "react-router-dom";
import Line from "../components/line";
import Instant from "../components/Landing_components/Instant";
import Smart from "../components/Landing_components/Smart";
import Montioring from "../components/Landing_components/Montioring";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900">
      <Line margin = "m-0.25"/>
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
              <Instant />
              <Smart />
              <Montioring />
            
            
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
