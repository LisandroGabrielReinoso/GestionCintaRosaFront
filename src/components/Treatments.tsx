import { useState } from "react";
import { FaTrash, FaEdit, FaPlus } from "react-icons/fa";
import Button from "./ui/Button";
import Input from "./ui/Input";
import QuickAccessButton from "./ui/QuickAccessButton";
import SummaryCard from "./ui/SummaryCard";

const Treatments = () => {
  const [treatments, setTreatments] = useState([
    { id: 1, consultaId: 101, descripcion: "Tratamiento con antibióticos" },
    { id: 2, consultaId: 102, descripcion: "Fisioterapia para rehabilitación" },
  ]);



  const handleDeleteTreatment = (id:number) => {
    setTreatments(treatments.filter((t) => t.id !== id));
  };

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h2 className="text-xl font-bold text-yellow-400 mb-4">Gestión de Tratamientos</h2>

      <div className="bg-gray-800 p-4 rounded-xl shadow-lg col-span-2 flex gap-4 mb-6">
        <QuickAccessButton icon={<FaPlus />} text="Nuevo Tratamiento" />
        <QuickAccessButton icon={<FaEdit />} text="Editar Tratamiento" />
        <QuickAccessButton icon={<FaTrash />} text="Eliminar Tratamiento" />
        <Input
          placeholder="Busca Tratamientos..."
          className="w-full h-15 bg-gray-800 text-white border-gray-700 focus:border-gold-300 py-2 px-3"
        />
        <Button className="bg-gold-400 text-gray-900 h-13">Buscar</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <SummaryCard title="Total Tratamientos" count={treatments.length} highlight />
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Lista de Tratamientos</h2>
        <div className="space-y-4">
          {treatments.map((treatment) => (
            <div key={treatment.id} className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
              <div>
                <p className="text-lg font-bold">Consulta ID: {treatment.consultaId}</p>
                <p className="text-gray-300">{treatment.descripcion}</p>
              </div>
              <Button className="bg-red-600 hover:bg-red-700" onClick={() => handleDeleteTreatment(treatment.id)}>
                Eliminar
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Treatments;
