import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../helpers/axios";

const PatientAsideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate("/login");
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    axiosInstance.get("patient/").then((response) => {
      const data = response.data;
      if (data) setIsProfile(true);
    });
  }, []);

  return (
    <>
      <aside className="min-h-screen flex flex-row bg-gray-100">
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:flex-col w-64 bg-white shadow-xl rounded-r-lg overflow-hidden`}
        >
          <div className="flex items-center justify-center h-20 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
            <h1 className="text-3xl font-semibold">MediLabAI</h1>
          </div>
          <ul className="flex flex-col py-4">
            <li className="group">
              <Link
                to="/dashboard"
                className="flex items-center no-underline px-4 py-2 text-gray-600 hover:bg-gray-100 group-hover:text-blue-600 transition-colors duration-200"
              >
                <span className="mr-3">
                  <i className="bx bx-home text-2xl"></i>
                </span>
                <span className="text-lg font-medium">Dashboard</span>
              </Link>
            </li>
            {isProfile ? (
              <li className="group">
                <Link
                  to="/dashboard/profile"
                  className="flex items-center px-4 no-underline py-2 text-gray-600 hover:bg-gray-100 group-hover:text-blue-600 transition-colors duration-200"
                >
                  <span className="mr-3">
                    <i className="bx bx-medical text-2xl"></i>
                  </span>
                  <span className="text-lg font-medium">Patient Profile</span>
                </Link>
              </li>
            ) : (
              <li className="group">
                <Link
                  to="/dashboard/profile/create"
                  className="flex items-center px-4 no-underline py-2 text-gray-600 hover:bg-gray-100 group-hover:text-blue-600 transition-colors duration-200"
                >
                  <span className="mr-3">
                    <i className="bx bx-medical text-2xl"></i>
                  </span>
                  <span className="text-lg font-medium">Create Patient Profile</span>
                </Link>
              </li>
            )}
            <li className="group">
              <Link
                to="/dashboard/prediction-diabetes"
                className="flex items-center px-4 py-2 no-underline text-gray-600 hover:bg-gray-100 group-hover:text-blue-600 transition-colors duration-200"
              >
                <span className="mr-3">
                  <i className="bx bx-medical text-2xl"></i>
                </span>
                <span className="text-lg font-medium">
                  Prediction Diabetes Risk
                </span>
              </Link>
              <ul className="pl-10">
                <li className="group">
                  <Link
                    to="/dashboard/prediction-diabetes/history"
                    className="flex items-center px-4 py-2 no-underline text-gray-500 hover:bg-gray-100 group-hover:text-blue-600 transition-colors duration-200"
                  >
                    <span className="text-sm">Latest Diabetes Risk</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="group">
              <Link
                to="/dashboard/list-education-patient"
                className="flex items-center px-4 py-2 no-underline text-gray-600 hover:bg-gray-100 group-hover:text-blue-600 transition-colors duration-200"
              >
                <span className="mr-3">
                  <i className="bx bx-medical text-2xl"></i>
                </span>
                <span className="text-lg font-medium">
                  My Medical Description
                </span>
              </Link>
            </li>

            <li className="mt-auto group">
              <div
                className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer group-hover:text-red-600 transition-colors duration-200"
                onClick={handleLogout}
              >
                <span className="mr-3">
                  <i className="bx bx-log-out text-2xl"></i>
                </span>
                <span className="text-lg font-medium">Logout</span>
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

export default PatientAsideBar;
