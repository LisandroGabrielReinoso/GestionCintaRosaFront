import { useState } from "react";
import { FaHome, FaUser, FaCog, FaBars, FaClinicMedical, FaDiagnoses } from "react-icons/fa";
import { FaUsers, FaArrowUpRightFromSquare, FaAddressBook, FaWpforms,   } from "react-icons/fa6";
import { GiHealthNormal } from "react-icons/gi";
import { MdOutlinePayment } from "react-icons/md";
import { CgLogOut } from "react-icons/cg";
import { MdDoorSliding } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2"
import { useAuth } from "../hooks/AuthContext"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const { logout: setAuth } = useAuth();

  const handleLogout = async() => {
    const result = await  Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Estás seguro de que quieres cerrar sesión?',
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    });
    if(result.isConfirmed){
      setAuth();
      navigate('/');
    }
  };


  return (
    <div className={`min-h-screen flex flex-col bg-gray-900 text-white ${isOpen ? "w-64" : "w-16"} transition-all duration-300`}>
      <div className="flex items-center justify-between p-4">
        {isOpen && <h1 className="text-xl font-bold">Menú</h1>}
        <button onClick={() => setIsOpen(!isOpen)}>
          <FaBars className="text-2xl" />
        </button>
      </div>
      <nav className="mt-4">
        <SidebarItem to="main" icon={<FaHome />} text="Inicio" isOpen={isOpen} />
        <SidebarItem to="/turns" icon={<FaAddressBook />} text="Turnos" isOpen={isOpen} />
        <SidebarItem to="patients" icon={<FaUsers  />} text="Pacientes" isOpen={isOpen} />
        <SidebarItem to="/doctors" icon={<FaClinicMedical />} text="Consultas" isOpen={isOpen} />
        <SidebarItem to="/diagnosis" icon={<FaDiagnoses />} text="Diagnósticos" isOpen={isOpen} />
        <SidebarItem to="/health" icon={<GiHealthNormal />} text="Tratamientos" isOpen={isOpen} />
        <SidebarItem to="/clinicstories" icon={<FaWpforms />} text="Historias Clínicas" isOpen={isOpen} />
        <SidebarItem to="/rooms" icon={<MdDoorSliding />} text="Salas" isOpen={isOpen} />
        <SidebarItem to="/payments" icon={<MdOutlinePayment />} text="Pagos" isOpen={isOpen} />
        <SidebarItem to="/export" icon={<FaArrowUpRightFromSquare />} text="Exportar" isOpen={isOpen} />
        <SidebarItem to="/profile" icon={<FaUser />} text="Perfil" isOpen={isOpen} />
        <SidebarItem to="/settings" icon={<FaCog />} text="Configuración" isOpen={isOpen} />
        <SidebarItem  icon={<CgLogOut />} text="Cerrar Sesión" isOpen={isOpen} onClick={handleLogout} />
      </nav>
    </div>
  );
};

const SidebarItem = ({ to, icon, text, isOpen }: { to: string, icon: React.ReactElement, text: string, isOpen: boolean }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Si la ruta actual incluye la del botón, se marca como activo
  const isActive = location.pathname.includes(to);

  return (
    <div
      onClick={() => navigate(to)}
      className={`flex items-center p-3 cursor-pointer transition-colors 
        ${isActive ? "bg-gray-700 text-yellow-400" : "hover:bg-gray-700"}`}
    >
      {icon}
      {isOpen && <span className="ml-4">{text}</span>}
    </div>
  );
};




export default Sidebar;
