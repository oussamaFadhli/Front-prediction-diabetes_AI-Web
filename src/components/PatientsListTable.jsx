import React, { useEffect, useState } from "react";
import axiosInstance from "../helpers/axios";

const PatientsListTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/patient-diabetes/");
        setData(response.data);
      } catch (error) {
        if (response.status ===403 || response.status === 401) setLoading(false);
      } finally {
        setLoading(false); 
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

  // Render loading indicator if data is still being fetched
  if (loading) {
    return (
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Loading...</h2>
      </div>
    );
  }

  // Render table when data is fetched
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Diabetes Data</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded my-6">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-2 px-6 hidden sm:table-cell">Diabetes Test ID</th>
              <th className="py-2 px-6">User ID</th>
              <th className="py-2 px-6">Email</th>
              <th className="py-2 px-6">Date</th>
              <th className="py-2 px-6">Diabetes Risk</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {data.map((row) => (
              <tr
                key={row.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-2 px-6 hidden sm:table-cell">{row.id}</td>
                <td className="py-2 px-6">{row.user.id}</td>
                <td className="py-2 px-6">{row.user.email}</td>
                <td className="py-2 px-6 hidden md:table-cell">{formatDate(row.release_date)}</td>
                <td className="py-2 px-6">{row.prediction_percentage.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientsListTable;
