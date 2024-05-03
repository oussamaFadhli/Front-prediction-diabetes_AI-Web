import React, { useState, useEffect } from "react";
import axiosInstance from "../helpers/axios";

const MainDashbordCards = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axiosInstance.get("/predict-diabetes/").then((response) => {
      const data = response.data;
      if (data.length > 0) {
        const latestData = data[data.length - 1];

        const convertedData = {
          ...latestData,
          glucose: latestData.glucose.toFixed(2),
          insulin: latestData.insulin.toFixed(2),
          bmi: latestData.bmi.toFixed(2),
          prediction_percentage: latestData.prediction_percentage.toFixed(2),
        };

        setUserData(convertedData);
      }
    });
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const { glucose, insulin, bmi, prediction_percentage } = userData;

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-4 mt-2 mb-2">
        <div className="bg-white overflow-hidden shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <dt className="text-xl font-bold leading-5 text-black truncate">
                Diabetes Risk
              </dt>
              <dd className="mt-1 text-3xl leading-9 font-semibold text-red-600">
                {prediction_percentage}
              </dd>
              <p className="text-s text-gray-600">
                Predicted risk of developing diabetes
              </p>
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
              <p className="text-s text-gray-600">
                Current blood glucose level
              </p>
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
              <p className="text-s text-gray-600">Current body mass index</p>
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
              <p className="text-s text-gray-600">Current Insulin</p>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDashbordCards;
