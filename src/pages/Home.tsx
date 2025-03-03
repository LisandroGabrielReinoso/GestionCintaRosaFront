import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Patients from '../components/Patients'
import Footer from '../components/Footer'
import { useNavigate } from "react-router-dom"
import {Outlet} from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("Matias Prieto");

  return (
    <>
      <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar userName={userName}  />
        <div className="p-6 mt-16">
          <Outlet/>
        </div>
        <Footer/>
      </div>
    </div>
    </>
  )
}

export default Home