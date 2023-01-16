import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Attestation from "./pages/Attestation";
import Death from "./pages/Death";
import './App.scss';

import Login from "./pages/Login";
import SingleApplication from "./pages/SingleApplication";
import Admin from "./pages/Admin";
import ProtectedRouteAdmin from "./pages/ProtectedRouteAdmin";
import Homez from "./components/Homez";
import AdminFlagged from "./pages/AdminFlagged";
import AdminVerified from "./pages/AdminVerified";
import Main from "./pages/Main";
import BirthReg from "./pages/BirthReg";
import BirthReport from "./pages/BirthReport";
import CertPending from "./pages/CertPending";
import BirthRegState from "./pages/BirthRegState";
import BirthRegLga from "./pages/BirthRegLga";
import PendingHospital from "./pages/PendingHospital"
import SingleHospital from "./pages/SingleHospital";
import PublicHos from "./pages/PublicHos";
import PrivateHos from "./pages/Private";
import Registrars from "./pages/Registrars";
import RegList from "./pages/RegistrarsList";
import SingleRegistrars from "./pages/Single-registrars";
import NewReg from "./pages/NewReg";
import PendingCert from "./pages/PendingCert";
import Still from "./pages/Still";
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
           <Route path='birth/registrations' element={<BirthReg/>}/>
           <Route path='birth/state/:id' element={<BirthRegState/>}/>
           <Route path='birth/lga/:lgaId' element={<BirthRegLga/>}/>
           {/* <Route path='birth/list/:zonalid/:stateId/:lgaid' element={<BirthRegList/>}/> */}
           {/* </Route> */}
                         
           <Route path='birth-report' element={<BirthReport/>}/>
           {/* </Route> */}
                          
           <Route path='death' element={<Death/>}/>
           <Route path='attestation' element={<Attestation/>}/>
           <Route path='still' element={<Still/>}/>
           <Route path='cert-pending' element={<CertPending/>}/>
           <Route path='birth/list/:zonalid/:stateId/:lgaid' element={<AdminVerified/>} />    
           <Route path='hospital/pending' element={<PendingHospital/>} />    
           <Route path='hospital/public' element={<PublicHos/>} />    
           <Route path='hospital/private' element={<PrivateHos/>} />    
           <Route path='single/:id' element={<SingleApplication/>} />
           <Route path='single-hospital/:id' element={<SingleHospital/>} />
           <Route path='single-registrars/:id' element={<SingleRegistrars/>} />
           <Route path='registrars' element={<Registrars/>} />
           <Route path='registrars-list/:id' element={<RegList/>} />
           <Route path='registrars-new' element={<NewReg/>} />
           <Route path='pending-cert' element={<PendingCert/>} />
           {/* <Route path='single/:id' element={<SingleApplication/>} /> */}
          {/* <Route path='single' element={<SingleApplication/>} /> */}
        </Route>
       

       

        <Route path='login' element={<Login/>} />
      </Routes>
    </Router>
  );
};

export default App;