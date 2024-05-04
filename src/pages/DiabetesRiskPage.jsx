import React from "react";
import { DashboardLayout } from "../layouts";
import { DiabetesTable } from "../components";
const DiabetesRiskPage = () => {
  return (
    <>
      <DashboardLayout>
        <DiabetesTable />
      </DashboardLayout>
    </>
  );
};

export default DiabetesRiskPage;
