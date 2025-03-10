import { useState } from "react";
import Tabs from "./ui/Tabs";
import Button from "./ui/Button";

const ClinicsStories = () => {
  const tabData = [
    {label:"Consultas", content: <Consultas/>},
    {label:"Diagnosticos", content: <Diagnosticos/>},
    {label:"Tratamientos", content: <Tratamientos/>},
    {label:"Signos Vitales", content: <SignosVitales/>},
    {label:"Antecedentes", content: <Antecedentes/>}
  
  ]

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      {/* Header con datos del paciente */}
      <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold py-2">Historia Clínica</h2>
        <Button>Buscar Paciente</Button>
        <p className="text-gray-400 py-1">Información del paciente</p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <p><strong>Nombre:</strong> Juan Pérez</p>
          <p><strong>DNI:</strong> 12345678</p>
          <p><strong>Domicilio:</strong> Calle Falsa 123</p>
          <p><strong>Teléfono:</strong> 381-555-5555</p>
          <p><strong>Email:</strong> juanperez@example.com</p>
          <p><strong>Obra Social:</strong> OSDE</p>
        </div>
      </div>
    <br />
    <Tabs tabs={tabData}/>
    </div>
  );
};

// Componentes de cada sección (luego se llenarán con datos reales)
const Consultas = () => <p>Lista de consultas aquí...</p>;
const Diagnosticos = () => <p>Lista de diagnósticos aquí...</p>;
const Tratamientos = () => <p>Lista de tratamientos aquí...</p>;
const SignosVitales = () => <p>Lista de signos vitales aquí...</p>;
const Antecedentes = () => <p>Lista de antecedentes aquí...</p>;

export default ClinicsStories;
