// import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import  Home from "./components/Home";
import Attestation from "./pages/Attestation";
// import Home2 from "./components/Home2";
import Death from "./pages/Death";
// import Dashboard from "./pages/Dashboard";
// import Device from "./pages/Device";
// import Single from "./pages/Single";
import './App.scss';
// import ProtectedRoute from "./pages/ProtectedRoute";
// import Verified from "./pages/Verified";
// import Flagged from "./pages/Flagged";
// import Pending from "./pages/Pending";
import Login from "./pages/Login";
// import SingleApplication from "./pages/SingleApplication";
// import Home from "./components/Home";
import Admin from "./pages/Admin";
import ProtectedRouteAdmin from "./pages/ProtectedRouteAdmin";
import Homez from "./components/Homez";
import AdminFlagged from "./pages/AdminFlagged";
import AdminVerified from "./pages/AdminVerified";
// import Testz from "./components/Testz";
import Main from "./pages/Main";
import BirthReg from "./pages/BirthReg";
import BirthReport from "./pages/BirthReport";
import CertPending from "./pages/CertPending";
const App = () => {
  return (
    <Router>
      <Routes>
      {/* <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home2 />
             </ProtectedRoute>
          }
        >
          <Route index element={<Pending/>} />
          <Route path='verified' element={<Verified/>} />
          <Route path='flagged' element={<Flagged/>} />
          <Route path='single' element={<SingleApplication/>} />
        </Route> */}

        <Route
          path="/"
          element={
            <ProtectedRouteAdmin>
              <Homez />
             </ProtectedRouteAdmin>
          }
        >
          <Route index element={<Main/>} />
           <Route path='admin-flagged' element={<AdminFlagged/>}/>
           <Route path='death' element={<Death/>}/>
           <Route path='birth' element={<Admin/>}/>
           <Route path='attestation' element={<Attestation/>}/>
           <Route path='birth-reg' element={<BirthReg/>}/>
           <Route path='birth-report' element={<BirthReport/>}/>
           <Route path='cert-pending' element={<CertPending/>}/>
          <Route path='admin-approved' element={<AdminVerified/>} />
          {/* <Route path='single' element={<SingleApplication/>} /> */}
        </Route>
       

       

        <Route path='login' element={<Login/>} />
      </Routes>
    </Router>
  );
};

export default App;
