import React, { useState, useEffect } from "react";
import axiosInstance from "../helpers/axios";

const MainDashbordCards = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axiosInstance
      .get("/predict-diabetes/")
      .then((response) => {
        const data = response.data;
        console.log("Fetched data:", data); // Log fetched data for debugging
        if (data.length > 0) {
          const latestData = data[data.length - 1];

          // Convert numerical data to strings
          const convertedData = {
            ...latestData,
            glucose: latestData.glucose.toFixed(2),
            insulin: latestData.insulin.toFixed(2),
            bmi: latestData.bmi.toFixed(2),
            prediction_percentage: latestData.prediction_percentage.toFixed(2),
          };
          
          // Set fetched and converted data to state
          setUserData(convertedData);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  // Ensure userData is not null before accessing properties
  const { glucose, insulin, bmi, prediction_percentage } = userData;

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
                {prediction_percentage}
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
                {glucose}
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
                {bmi}
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
                {insulin}
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDashbordCards;
