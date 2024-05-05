import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  MainDashboard,
  Login,
  Register,
  PatientProfile,
  MedicineProfile,
  CreatePatientProfile,
  CreateMedicineProfile,
  PredictDiabetes,
  DiabetesTablePage,
  PatientListPage,
  CreateEducationPatient,
  MedicineEducationPatients,
  EducationPatients,
} from "./pages";
import PrivateRoutes from "./utils/PrivateRoutes";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<Register />} path="/register" exact />
        <Route element={<Login />} path="/login" exact />

        <Route element={<PrivateRoutes />}>
          <Route element={<MainDashboard />} path="/dashboard" />
          <Route element={<PatientProfile />} path="/dashboard/profile" />
          <Route
            element={<CreatePatientProfile />}
            path="/dashboard/profile/create"
          />
          <Route
            element={<MedicineProfile />}
            path="/dashboard/profile/medicine"
          />
        </Route>
        <Route
          element={<CreateMedicineProfile />}
          path="/dashboard/profile/medicine/create"
        />
        <Route
          element={<PredictDiabetes />}
          path="/dashboard/prediction-diabetes"
        />
        <Route
          element={<DiabetesTablePage />}
          path="/dashboard/prediction-diabetes/history"
        />
        <Route
          element={<PatientListPage />}
          path="/dashboard/medicine/patients-risk-list"
        />
        <Route
          element={<CreateEducationPatient />}
          path="/dashboard/medicine/create-patient-education"
        />
        <Route
          element={<MedicineEducationPatients />}
          path="/dashboard/medicine/list-education-patient"
        />
        <Route
          element={<EducationPatients />}
          path="/dashboard/list-education-patient"
        />
      </Routes>
    </>
  );
};

export default App;
