import React, { useEffect, useState } from "react";
import axiosInstance from "../helpers/axios";

const DiabetesTable = () => {
  const [data, setData] = useState([]);
  const [selectedDataId, setSelectedDataId] = useState("");
  const [selectedData, setSelectedData] = useState(null);

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
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  const handleInputChange = (event) => {
    setSelectedDataId(event.target.value);
    const selected = data.find((d) => d.id.toString() === event.target.value);
    setSelectedData(selected);
  };

  const handlePrint = () => {
    if (selectedData) {
      const printWindow = window.open("", "", "height=400,width=600");
      printWindow.document.write(
        "<html><head><title>Print Diabetes Data</title></head><body>"
      );
      printWindow.document.write("<h1>Diabetes Data</h1>");
      printWindow.document.write(`<p>ID: ${selectedData.id}</p>`);
      printWindow.document.write(`<p>Email: ${selectedData.user.email}</p>`);
      printWindow.document.write(`<p>Age: ${selectedData.age}</p>`);
      printWindow.document.write(`<p>Glucose: ${selectedData.glucose}</p>`);
      printWindow.document.write(
        `<p>Blood Pressure: ${selectedData.blood_pressure}</p>`
      );
      printWindow.document.write(
        `<p>Skin Thickness: ${selectedData.skin_thickness}</p>`
      );
      printWindow.document.write(`<p>Insulin: ${selectedData.insulin}</p>`);
      printWindow.document.write(`<p>BMI: ${selectedData.bmi}</p>`);
      printWindow.document.write(
        `<p>Diabetes Pedigree Function: ${selectedData.diabetes_pedigree_function}</p>`
      );
      printWindow.document.write(
        `<p>Date: ${formatDate(selectedData.release_date)}</p>`
      );
      printWindow.document.write(
        `<p>Diabetes Risk: ${selectedData.prediction_percentage.toFixed(2)}</p>`
      );
      printWindow.document.write("</body></html>");
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Diabetes Data</h2>
      <div className="mb-4">
        <label
          htmlFor="data-input"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Enter data ID:
        </label>
        <input
          id="data-input"
          type="text"
          value={selectedDataId}
          onChange={handleInputChange}
          className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded my-6">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-2 px-6 hidden sm:table-cell">ID</th>
              <th className="py-2 px-6">Age</th>
              <th className="py-2 px-6">Glucose</th>
              <th className="py-2 px-6">Blood Pressure</th>
              <th className="py-2 px-6">Skin Thickness</th>
              <th className="py-2 px-6">Insulin</th>
              <th className="py-2 px-6">BMI</th>
              <th className="py-2 px-6 hidden sm:table-cell">
                Diabetes Pedigree Function
              </th>
              <th className="py-2 px-6 hidden md:table-cell">Date</th>
              <th className="py-2 px-6">Diabetes Risk</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {data.map((row) => (
              <tr
                key={row.id}
                className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
                onClick={() => setSelectedDataId(row.id.toString())}
              >
                <td className="py-2 px-6 hidden sm:table-cell">{row.id}</td>
                <td className="py-2 px-6">{row.age}</td>
                <td className="py-2 px-6">{row.glucose}</td>
                <td className="py-2 px-6">{row.blood_pressure}</td>
                <td className="py-2 px-6">{row.skin_thickness}</td>
                <td className="py-2 px-6">{row.insulin}</td>
                <td className="py-2 px-6">{row.bmi}</td>
                <td className="py-2 px-6 hidden sm:table-cell">
                  {row.diabetes_pedigree_function}
                </td>
                <td className="py-2 px-6 hidden md:table-cell">
                  {formatDate(row.release_date)}
                </td>
                <td className="py-2 px-6">
                  {row.prediction_percentage.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedData && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h3 className="text-xl font-semibold mb-2">Selected Data Details</h3>
          <p>
            <strong>ID:</strong> {selectedData.id}
          </p>
          <p>
            <strong>Email:</strong> {selectedData.user.email}
          </p>
          <p>
            <strong>Age:</strong> {selectedData.age}
          </p>
          <p>
            <strong>Glucose:</strong> {selectedData.glucose}
          </p>
          <p>
            <strong>Blood Pressure:</strong> {selectedData.blood_pressure}
          </p>
          <p>
            <strong>Skin Thickness:</strong> {selectedData.skin_thickness}
          </p>
          <p>
            <strong>Insulin:</strong> {selectedData.insulin}
          </p>
          <p>
            <strong>BMI:</strong> {selectedData.bmi}
          </p>
          <p>
            <strong>Diabetes Pedigree Function:</strong>{" "}
            {selectedData.diabetes_pedigree_function}
          </p>
          <p>
            <strong>Date:</strong> {formatDate(selectedData.release_date)}
          </p>
          <p>
            <strong>Diabetes Risk:</strong>{" "}
            {selectedData.prediction_percentage.toFixed(2)}
          </p>
          <button
            onClick={handlePrint}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          >
            Print
          </button>
        </div>
      )}
    </div>
  );
};

export default DiabetesTable;
