import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AsideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate("/login");
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="min-h-screen flex flex-row bg-gray-100">
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:flex-col w-56 bg-white rounded-r-3xl overflow-hidden shadow-md`}
        >
          <div className="flex items-center justify-center h-20 bg-blue-600 text-white">
            <h1 className="text-3xl font-semibold">MediLibAI</h1>
          </div>
          <ul className="flex flex-col py-4">
            <li>
              <Link
                to="/dashboard"
                className="sidebar-link"
              >
                <span className="sidebar-icon">
                  <i className="bx bx-home"></i>
                </span>
                <span className="sidebar-text">Dashboard</span>
              </Link>
            </li>
            {/* Add other sidebar menu items similarly */}
            <li>
              <div
                className="sidebar-link"
                onClick={handleLogout}
              >
                <span className="sidebar-icon">
                  <i className="bx bx-log-out"></i>
                </span>
                <button className="sidebar-text">Logout</button>
              </div>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleSidebar}
            className="fixed right-4 top-4 z-50 block text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800"
          >
            {isOpen ? <p>Open</p> : <p>Closed</p>}
          </button>
        </div>
      </div>
    </>
  );
};

export default AsideBar;
