import { DiabetesRisk, MainDashbordCards } from "../components";
import { DashboardLayout } from "../layouts";
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
const data = [5, 10, 20, 30, 40,50, 60, 70, 80, 90,100];
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
const MainDashboard = () => {
  return (
    <DashboardLayout>
      <>
        <MainDashbordCards />
        <DiabetesRisk labels={labels} data={data} options={options}/>
      </>
    </DashboardLayout>
  );
};

export default MainDashboard;
