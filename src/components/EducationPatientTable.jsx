import React, { useEffect, useState } from "react";
import axiosInstance from "../helpers/axios";

const EducationPatientTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/education-patients/");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Diabetes Data</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded my-6">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-2 px-6 hidden sm:table-cell">ID</th>
              <th className="py-2 px-6">Patient ID</th>
              <th className="py-2 px-6">Patient Email</th>
              <th className="py-2 px-6">Diabetes Risk Test ID</th>
              <th className="py-2 px-6">Diabetes Risk</th>
              <th className="py-2 px-6">Description</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {data.map((row) => (
              <tr
                key={row.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-2 px-6 hidden sm:table-cell">{row.id}</td>
                <td className="py-2 px-6">{row.patient_data.user.id}</td>
                <td className="py-2 px-6">{row.patient_data.user.email}</td>
                <td className="py-2 px-6">{row.patient_data.id}</td>
                <td className="py-2 px-6">
                  {row.patient_data.prediction_percentage.toFixed(2)}
                </td>
                <td className="py-2 px-6 whitespace-pre-line">{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EducationPatientTable;
