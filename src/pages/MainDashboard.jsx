import { DiabetesRisk, MainDashbordCards } from "../components";
import { useEffect, useState } from "react";
import { DashboardLayout } from "../layouts";
import axiosInstance from "../helpers/axios";

const formatReleaseTime = (isoDateString) => {
  const date = new Date(isoDateString);
  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  const seconds = date.getUTCSeconds().toString().padStart(2, '0');
  
  return `${hours}:${minutes}:${seconds}`;
};
const MainDashboard = () => {

  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/predict-diabetes/');
        const apiData = response.data;
        const recent_data = apiData.slice(-10);

        const labels = recent_data.map(item => formatReleaseTime(item.release_date));
        const data = recent_data.map(item => item.prediction_percentage);

        setLabels(labels);
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const options = {
    responsive: true,
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <DashboardLayout>
      <>
        <MainDashbordCards />
        <DiabetesRisk labels={labels} data={data} options={options} />
      </>
    </DashboardLayout>
  );
};

export default MainDashboard;
