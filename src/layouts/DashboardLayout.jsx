// DashboardLayout.js
import React, { useEffect,useState } from "react";
import axiosInstance from "../helpers/axios";
import { DoctorAsideBar,PatientAsideBar } from "../components";



const DashboardLayout = ({ children }) => {
  const [isDoctor,setIsDoctor] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("user/");
        if (response.data.is_doctor) setIsDoctor(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="flex h-screen bg-gray-100">
     {isDoctor ? <DoctorAsideBar/> : <PatientAsideBar/>}

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 p-4">
          {/* Header content */}
          <h1 className="text-xl font-bold">Dashboard</h1>
        </header>

        {/* Main Content Area */}
        <main className="p-4">
          {/* Content */}
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
