import { FaUserPlus, FaClipboardList, FaCalendarAlt, FaChartBar } from "react-icons/fa";
import { SetStateAction, useState } from "react";
import Input  from "./ui/Input";
import  Button  from "./ui/Button";
import SummaryCard from "./ui/SummaryCard";
import QuickAccessButton from "./ui/QuickAccessButton";

const HomeDashboard = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">Inicio</h1>
      
      {/* Barra de Búsqueda */}
      <div className="mb-6 flex gap-4">
        <Input 
          placeholder="Buscar pacientes, turnos, consultas..."
          value={search}
          onChange={(e: { target: { value: SetStateAction<string>; }; }) => setSearch(e.target.value)}
          className="w-full bg-gray-800 text-white border-gray-700 focus:border-gold-400"
        />
        <Button className="bg-gold-400 text-gray-900">Buscar</Button>
      </div>

      {/* Panel de Resumen */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <SummaryCard title="Pacientes Activos" count={128} />
        <SummaryCard title="Turnos Hoy" count={24} />
        <SummaryCard title="Consultas Pendientes" count={8} />
        <SummaryCard title="Alertas Críticas" count={2} highlight />
      </div>
      
      {/* Agenda y Accesos Rápidos */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-gold-400 mb-4">Agenda del Día</h2>
          <ul>
            <li className="text-gray-300">🟢 09:00 - Juan Pérez (Consulta)</li>
            <li className="text-gray-300">🟡 11:00 - María Gómez (Turno pendiente)</li>
            <li className="text-gray-300">🔴 14:00 - Carlos López (Urgencia)</li>
          </ul>
        </div>
        
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg col-span-2 flex gap-4">
          <QuickAccessButton icon={<FaUserPlus />} text="Nuevo Paciente" />
          <QuickAccessButton icon={<FaClipboardList />} text="Registrar Consulta" />
          <QuickAccessButton icon={<FaCalendarAlt />} text="Gestionar Turnos" />
          <QuickAccessButton icon={<FaChartBar />} text="Reportes" />
        </div>
      </div>
    </div>
  );
};





export default HomeDashboard;
