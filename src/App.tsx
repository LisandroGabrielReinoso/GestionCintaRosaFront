import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoutes from './components/ProtectedRoutes';
import { AuthProvider } from './hooks/AuthContext';
import Home from './pages/Home';
import Patients from './components/Patients';
import HomeDashboard from './components/HomeDashboard'
import Shifts from './components/Shifts';
import Consults from './components/Consults'; //Sin realizar
import Diagnosis from './components/Diagnosis'; //Sin realizar
import Treatments from './components/Treatments'; //Sin realizar
import ClinicsStories from './components/ClinicsStories'; //Sin realizar
import Rooms from './components/Rooms'; //Sin realizar
import Payments from './components/Payments'; //Sin realizar
import Exports from './components/Exports'; //Sin realizar
import Porfile from './components/Porfile'; //Sin realizar
import Settings from './components/Settings'; //Sin realizar

function App() {
  return (
    <>
      <ToastContainer />
      <div className="parent">
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="/home" element={<Home />}>
                  <Route path="main" element={<HomeDashboard/>}/>
                  <Route path="patients" element={<Patients />} />
                  <Route path='shifts' element={<Shifts/>}/>
                  <Route path='consults' element={<Consults/>}/>
                  <Route path='diagnosis' element={<Diagnosis/>}/>
                  <Route path='treatments' element={<Treatments/>}/>  
                  <Route path='clinicstories' element={<ClinicsStories/>}/>
                  <Route path='rooms' element={<Rooms/>}/>
                  <Route path='payments' element={<Payments/>}/>
                  <Route path='export' element={<Exports/>}/>
                  <Route path='profile' element={<Porfile/>}/>
                  <Route path='settings' element={<Settings/>}/>
                </Route>
              </Route>
            </Routes>
          </Router>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
