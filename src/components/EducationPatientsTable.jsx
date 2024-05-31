import React, { useEffect, useState } from "react";
import axiosInstance from "../helpers/axios";

const EducationPatientTable = ({ API, Title }) => {
  const [data, setData] = useState([]);
  const [selectedTestId, setSelectedTestId] = useState("");
  const [selectedTest, setSelectedTest] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(API);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [API]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  const handleInputChange = (event) => {
    setSelectedTestId(event.target.value);
    const selected = data.find(d => d.id.toString() === event.target.value);
    setSelectedTest(selected);
  };

  const handlePrint = () => {
    if (selectedTest) {
      const printWindow = window.open('', '', 'height=400,width=600');
      printWindow.document.write('<html><head><title>Print Test Result</title></head><body>');
      printWindow.document.write('<h1>Test Result</h1>');
      printWindow.document.write(`<p>ID: ${selectedTest.id}</p>`);
      printWindow.document.write(`<p>Patient ID: ${selectedTest.patient_data.user.id}</p>`);
      printWindow.document.write(`<p>Patient Email: ${selectedTest.patient_data.user.email}</p>`);
      printWindow.document.write(`<p>Diabetes Risk Test ID: ${selectedTest.patient_data.id}</p>`);
      printWindow.document.write(`<p>Diabetes Risk: ${selectedTest.patient_data.prediction_percentage.toFixed(2)}</p>`);
      printWindow.document.write(`<p>Description: ${selectedTest.description}</p>`);
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">{Title}</h2>
      <div className="mb-4">
        <label htmlFor="test-input" className="block text-gray-700 text-sm font-bold mb-2">Enter test ID:</label>
        <input 
          id="test-input" 
          type="text" 
          value={selectedTestId} 
          onChange={handleInputChange} 
          className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
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
                className={`border-b border-gray-200 hover:bg-gray-100 ${selectedTestId === row.id ? 'bg-yellow-200' : ''}`}
                onClick={() => setSelectedTestId(row.id.toString())}
              >
                <td className="py-2 px-6 hidden sm:table-cell">{row.id}</td>
                <td className="py-2 px-6">{row.patient_data.user.id}</td>
                <td className="py-2 px-6">{row.patient_data.user.email}</td>
                <td className="py-2 px-6">{row.patient_data.id}</td>
                <td className="py-2 px-6">{row.patient_data.prediction_percentage.toFixed(2)}</td>
                <td className="py-2 px-6 whitespace-pre-line">{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedTest && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h3 className="text-xl font-semibold mb-2">Selected Test Details</h3>
          <p><strong>ID:</strong> {selectedTest.id}</p>
          <p><strong>Patient ID:</strong> {selectedTest.patient_data.user.id}</p>
          <p><strong>Patient Email:</strong> {selectedTest.patient_data.user.email}</p>
          <p><strong>Diabetes Risk Test ID:</strong> {selectedTest.patient_data.id}</p>
          <p><strong>Diabetes Risk:</strong> {selectedTest.patient_data.prediction_percentage.toFixed(2)}</p>
          <p><strong>Description:</strong> {selectedTest.description}</p>
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

export default EducationPatientTable;
