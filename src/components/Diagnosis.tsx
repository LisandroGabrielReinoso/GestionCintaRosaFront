
import Input from "./ui/Input"
import Button from "./ui/Button"
import QuickAccessButton from "./ui/QuickAccessButton"
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa"

const Diagnosis = () => {
  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <div className="bg-gray-800 p-4 rounded-xl shadow-lg flex flex-col gap-4">
        {/* Botones de acceso rápido */}
        <div className="flex gap-4">
          <QuickAccessButton icon={<FaPlus />} text="Nuevo Diagnóstico" />
          <QuickAccessButton icon={<FaEdit />} text="Editar Diagnóstico" />
          <QuickAccessButton icon={<FaTrash />} text="Eliminar Diagnóstico" />
        </div>

        {/* Input de búsqueda */}
        <div className="flex gap-2">
          <Input
            placeholder="Buscar Consultas..."
            className="w-full h-10 bg-gray-700 text-white border-gray-600 focus:border-gold-300 py-2 px-3 rounded-md"
          />
          <Button className="bg-gold-400 text-gray-900 h-10 px-4 rounded-md">Buscar</Button>
        </div>

        {/* Filtros */}
        <div className="flex gap-4 items-center">
          {/* Filtro por estado */}
          <select className="bg-gray-700 text-white p-2 rounded-md">
            <option value="">Estado</option>
            <option value="pendiente">Pendiente</option>
            <option value="confirmado">Confirmado</option>
            <option value="finalizado">Finalizado</option>
          </select>

          {/* Checkbox para mostrar solo urgencias */}
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            <span>Solo Urgencias</span>
          </label>

          {/* Checkbox para mostrar diagnósticos nuevos */}
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            <span>Solo Nuevos</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Diagnosis