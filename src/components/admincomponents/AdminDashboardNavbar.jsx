import React from "react";
import { NavLink } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";



const AdminDashboardNavbar = () => {
  return (
    <>
    
      {/* Navbar */}
      <nav className="w-full border-b border-gray-800/50 bg-gradient-to-r from-gray-900 to-blue-900 ">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">

            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-white" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116A31.365 31.365 0 008.84 7.5a2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-lg font-bold text-white md:text-xl">RapidResq</span>
              </Link>

            </div>
           

            

          </div>
        </div>
      </nav>
    </>
  )
}

export default AdminDashboardNavbar;
