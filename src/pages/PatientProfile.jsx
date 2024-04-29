import React from "react";
import { DashboardLayout } from "../layouts";
import { PatientProfileForm } from "../components";
const PatientProfile = () => {
  return (
    <>
      <DashboardLayout>
        <PatientProfileForm />
      </DashboardLayout>
    </>
  );
};

export default PatientProfile;
