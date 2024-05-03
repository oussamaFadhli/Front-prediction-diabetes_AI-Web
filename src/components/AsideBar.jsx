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
      <aside className="min-h-screen flex flex-row bg-gray-100">
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
                className="sidebar-link text-black no-underline"
              >
                <span className="sidebar-icon">
                  <i className="bx bx-home"></i>
                </span>
                <span className="sidebar-text text-base">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/profile"
                className="sidebar-link text-black no-underline"
              >
                <span className="sidebar-icon">
                  <i className="bx bx-user"></i>{" "}
                  {/* Changed icon to represent a user */}
                </span>
                <span className="sidebar-text text-base">Patient Profile</span>
              </Link>
              <ul>
                {" "}
                {/* Add submenu for patient profile */}
                <li>
                  <Link
                    to="/dashboard/profile/create"
                    className="sidebar-sublink text-sm text-black no-underline "
                  >
                    Create Patient Profile
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/dashboard/profile/medicine"
                className="sidebar-link text-black no-underline"
              >
                <span className="sidebar-icon">
                  <i className="bx bx-medical"></i>{" "}
                  {/* Changed icon to represent medicine */}
                </span>
                <span className="sidebar-text text-base text-black no-underline">
                  Medicine Profile
                </span>
              </Link>
              <ul>
                {" "}
                {/* Add submenu for medicine profile */}
                <li>
                  <Link
                    to="/dashboard/profile/medicine/create"
                    className="sidebar-sublink text-sm no-underline text-black"
                  >
                    Create Medicine Profile
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/dashboard/prediction-diabetes"
                className="sidebar-link text-black no-underline"
              >
                <span className="sidebar-icon">
                  <i className="bx bx-medical"></i>{" "}
                </span>
                <span className="sidebar-text text-base text-black no-underline">
                  Prediction Diabetes Risk
                </span>
              </Link>
              <ul>
                {" "}
                <li>
                  <Link
                    to="/dashboard/prediction-diabetes/history"
                    className="sidebar-sublink text-sm text-black no-underline"
                  >
                    Latest Diabetes Risk
                  </Link>
                </li>
              </ul>
            </li>
            {/* Add other sidebar menu items similarly */}
            <li>
              <div className="sidebar-link" onClick={handleLogout}>
                <span className="sidebar-icon">
                  <i className="bx bx-log-out"></i>
                </span>
                <button className="sidebar-text text-base">Logout</button>
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
      </aside>
    </>
  );
};

export default AsideBar;
