import React, { useState, useEffect } from "react";
import axiosInstance from "../helpers/axios";

const MainDashbordCards = () => {
  // Define state variables to store fetched data
  const [diabetesRisk, setDiabetesRisk] = useState(null);
  const [bloodGlucose, setBloodGlucose] = useState(null);
  const [bmi, setBMI] = useState(null);
  const [insulin, setInsulin] = useState(null);

  useEffect(() => {
    // Fetch data from API when component mounts
    axiosInstance
      .get("predict/")
      .then((response) => {
        const data = response.data;
        // Set fetched data to state variables
        setDiabetesRisk(data.diabetesRisk);
        setBloodGlucose(data.bloodGlucose);
        setBMI(data.bmi);
        setInsulin(data.insulin);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-4 mt-4">
        <div className="bg-white overflow-hidden shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <dt className="text-xl font-bold leading-5 text-black truncate">
                Diabetes Risk
              </dt>
              <dd className="mt-1 text-3xl leading-9 font-semibold text-red-600">
                {diabetesRisk !== null ? `${diabetesRisk}%` : "Loading..."}
              </dd>
            </dl>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <dt className="text-xl leading-5 font-bold text-black truncate">
                Blood Glucose
              </dt>
              <dd className="mt-1 text-3xl leading-9 font-semibold text-green-600">
                {bloodGlucose !== null ? `${bloodGlucose}mg` : "Loading..."}
              </dd>
            </dl>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <dt className="text-xl leading-5 font-bold text-black truncate">
                BMI
              </dt>
              <dd className="mt-1 text-3xl leading-9 font-semibold text-yellow-500">
                {bmi !== null ? bmi : "Loading..."}
              </dd>
            </dl>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <dt className="text-xl leading-5 font-bold text-black truncate">
                Insulin
              </dt>
              <dd className="mt-1 text-3xl leading-9 font-semibold text-green-600">
                {insulin !== null ? `${insulin}mIU/L` : "Loading..."}
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDashbordCards;
