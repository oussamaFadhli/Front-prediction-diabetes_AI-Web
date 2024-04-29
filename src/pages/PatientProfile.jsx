import React from "react";
import { DashboardLayout } from "../layouts";
import { ProfileForm } from "../components";
const PatientProfile = () => {
  return (
    <>
      <DashboardLayout>
        <ProfileForm />
      </DashboardLayout>
    </>
  );
};

export default PatientProfile;
