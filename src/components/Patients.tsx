import { FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getPatients } from "../api/methods/patients";
import IPatients from "../interfaces/IPatients";

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
    setItems(items.filter((item) => item.Id !== id));
    // Acá podés agregar la lógica para eliminarlo en la API si querés
  };

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <h2 className="text-xl font-bold text-black mb-4">Lista de Pacientes</h2>

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

                <button
                  onClick={() => handleDelete(item.Id)}
                  className="text-red-400 hover:text-red-600 transition"
                >
                  <FaTrash />
                </button>
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
