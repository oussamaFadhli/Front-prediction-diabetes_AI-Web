import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, MainDashboard, Login, Register,PatientProfile } from "./pages";
import PrivateRoutes from "./utils/PrivateRoutes";

const App = () => {
  return (
    <>
    <Routes>
      <Route element={<Home/>} path="/" exact/>
      <Route element={<Register/>} path="/register" exact/>
      <Route element={<Login/>} path="/login" exact/>


      <Route element={<PrivateRoutes/>}>
        <Route element={<MainDashboard/>} path="/dashboard"/>
        <Route element={<PatientProfile/>} path='/dashboard/profile'/>
      </Route>
    </Routes>
    </>
  );
};

export default App;
