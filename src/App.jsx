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
  PredictDiabetes
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
      </Routes>
    </>
  );
};

export default App;
