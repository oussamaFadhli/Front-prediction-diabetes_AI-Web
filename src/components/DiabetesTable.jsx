import React, { useState, useEffect } from "react";
import axiosInstance from "../helpers/axios";

const DiabetesTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("predict-diabetes/");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Diabetes Data</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded my-6">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-2 px-6">ID</th>
              <th className="py-2 px-6">Age</th>
              <th className="py-2 px-6">Glucose</th>
              <th className="py-2 px-6">Blood Pressure</th>
              <th className="py-2 px-6">Skin Thickness</th>
              <th className="py-2 px-6">Insulin</th>
              <th className="py-2 px-6">BMI</th>
              <th className="py-2 px-6">Diabetes Pedigree Function</th>
              <th className="py-2 px-6">Date</th>
              <th className="py-2 px-6">Diabetes Risk</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {data.map((row) => (
              <tr key={row.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-2 px-6">{row.id}</td>
                <td className="py-2 px-6">{row.age}</td>
                <td className="py-2 px-6">{row.glucose}</td>
                <td className="py-2 px-6">{row.blood_pressure}</td>
                <td className="py-2 px-6">{row.skin_thickness}</td>
                <td className="py-2 px-6">{row.insulin}</td>
                <td className="py-2 px-6">{row.bmi}</td>
                <td className="py-2 px-6">{row.diabetes_pedigree_function}</td>
                <td className="py-2 px-6">{formatDate(row.release_date)}</td>
                <td className="py-2 px-6">{parseFloat(row.prediction_percentage).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiabetesTable;
