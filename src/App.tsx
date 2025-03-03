import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoutes from './components/ProtectedRoutes';
import { AuthProvider } from './hooks/AuthContext';
import Home from './pages/Home';
import Patients from './components/Patients';
import HomeDashboard from './components/HomeDashboard'

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
                  <Route path="patients" element={<Patients />} /> 
                  <Route path="main" element={<HomeDashboard/>}/>
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
