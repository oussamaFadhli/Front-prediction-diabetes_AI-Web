import React from "react";
import { DashboardLayout } from "../layouts";
import { MedicineProfileForm } from "../components";
const PatientProfile = () => {
  return (
    <>
      <DashboardLayout>
        <MedicineProfileForm />
      </DashboardLayout>
    </>
  );
};

export default PatientProfile;
