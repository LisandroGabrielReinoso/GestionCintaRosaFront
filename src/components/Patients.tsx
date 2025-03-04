import { FaTrash, FaUserPlus, FaUserEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getPatients } from "../api/methods/patients";
import IPatients from "../interfaces/IPatients";
import Button from "./ui/Button";
import Input from "./ui/Input";
import QuickAccessButton from "./ui/QuickAccessButton";

const Patients = () => {
  const [items, setItems] = useState<IPatients[]>([]);

  const getPatientsList = async () => {
    const res = await getPatients();
    console.log(res);
    
    if (res.success && Array.isArray(res.data)) { 
      setItems(res.data);
    } else {
      console.error("Error obteniendo pacientes:", res.message);
    }
  };

  useEffect(() => {
    getPatientsList();
  }, []);

  const handleDelete = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
    // Acá podés agregar la lógica para eliminarlo en la API si querés
  };

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h2 className="text-xl font-bold text-yellow-400 mb-4">Lista de Pacientes</h2>

      <div className="bg-gray-800 p-4 rounded-xl shadow-lg col-span-2 flex gap-4">
        <QuickAccessButton icon={<FaUserPlus />} text="Nuevo Paciente" />
        <QuickAccessButton icon={<FaUserEdit />} text="Editar Paciente" />
        <QuickAccessButton icon={<FaTrash />} text="Eliminar Paciente" />
        <Input
         placeholder="Busca Pacientes..."
         className="w-full h-15 bg-gray-800 text-white border-gray-700 focus:border-gold-300 py-2 px-3"
        />
        <Button className="bg-gold-400 text-gray-900 h-13">Buscar</Button>
      </div>
      <br />

      <div className="bg-gray-800 rounded-lg shadow-md p-4">
        {items.length > 0 ? (
          <ul className="divide-y divide-gray-700">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center p-3"
              >
                <div className="text-white">
                  <p className="font-semibold">{item.nombre} {item.apellido}</p>
                  <div className="text-sm text-black-400 flex flex-wrap gap-2">
                    <span>{item.edad} años</span> 
                    <span>| DNI: {item.dni}</span> 
                    <span>| {item.direccion}</span> 
                    <span>| {item.telefono}</span> 
                    <span>| {item.email}</span> 
                    <span>| Tipo de Sangre: {item.tipoSangre}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 text-center">No hay pacientes.</p>
        )}
      </div>
    </div>
  );
};

export default Patients;
