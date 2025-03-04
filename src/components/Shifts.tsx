import React, { useState, FormEvent } from 'react';
import QuickAccessButton from './ui/QuickAccessButton';
import { FaUserPlus, FaCheckCircle } from 'react-icons/fa';
import { FaXmark } from "react-icons/fa6";
import Input from './ui/Input';
import Button from './ui/Button';

// Tipos para los turnos
interface Turno {
  id: number;
  nombre: string;
  fecha: string;
}

const Shifts: React.FC = () => {
  const [turnos, setTurnos] = useState<Turno[]>([]);
  const [nombre, setNombre] = useState<string>('');
  const [fecha, setFecha] = useState<string>('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!nombre || !fecha) return;

    const nuevoTurno: Turno = {
      id: turnos.length + 1,
      nombre,
      fecha,
    };

    setTurnos([...turnos, nuevoTurno]);
    setNombre('');
    setFecha('');
  };

  // Función para manejar la cancelación de un turno
  const handleCancel = (id: number) => {
    setTurnos(turnos.filter((turno) => turno.id !== id));
  };

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <div className="text-xl font-bold text-yellow-400 mb-4">
        Turnos Médicos
      </div>

        <br />
      {/* Formulario de Turno */}
      
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg col-span-2 flex gap-4">
          <QuickAccessButton icon={<FaUserPlus />} text="Nuevo Turno" />
          <QuickAccessButton icon={<FaXmark />} text="Cancelar Turno" />
          <QuickAccessButton icon={<FaCheckCircle />} text="LLegó" />
          <Input 
           placeholder="Busca turnos..."
           className="w-full h-14 bg-gray-800 text-white border-gray-700 focus:border-gold-300 py-2 px-3"
          />
          <Button className="bg-gold-400 text-gray-900 h-14">Buscar</Button>
        </div>
     
        <br />
      {/* Lista de Turnos */}
      <div className="w-full bg-gray-900 text-white border-gray-700 focus:border-gold-400">
        <h2 className="text-xl font-semibold text-center mb-4">Lista de Turnos</h2>
        {turnos.length === 0 ? (
          <p className="text-center text-gray-500">No hay turnos agendados.</p>
        ) : (
          <ul className="space-y-4">
            {turnos.map((turno) => (
              <li key={turno.id} className="flex justify-between items-center p-3 bg-blue-100 rounded-md shadow-sm">
                <span>{turno.nombre} - {turno.fecha}</span>
                <button
                  onClick={() => handleCancel(turno.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600"
                >
                  Cancelar
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Shifts;
