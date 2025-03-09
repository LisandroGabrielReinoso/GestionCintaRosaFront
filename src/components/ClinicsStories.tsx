import { useState } from "react";

const ClinicsStories = () => {
  const [activeTab, setActiveTab] = useState("consultas");

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      {/* Header con datos del paciente */}
      <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold">Historia Clínica</h2>
        <p className="text-gray-400">Información del paciente</p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <p><strong>Nombre:</strong> Juan Pérez</p>
          <p><strong>DNI:</strong> 12345678</p>
          <p><strong>Domicilio:</strong> Calle Falsa 123</p>
          <p><strong>Teléfono:</strong> 381-555-5555</p>
          <p><strong>Email:</strong> juanperez@example.com</p>
          <p><strong>Obra Social:</strong> OSDE</p>
        </div>
      </div>

      {/* Tabs de navegación */}
      <div className="flex gap-4 mt-6">
        {["consultas", "diagnosticos", "tratamientos", "signos", "antecedentes"].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md ${activeTab === tab ? "bg-gold-400 text-gray-900" : "bg-gray-700 text-white"}`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Contenido dinámico según la pestaña */}
      <div className="mt-4 p-4 bg-gray-800 rounded-xl shadow-lg">
        {activeTab === "consultas" && <Consultas />}
        {activeTab === "diagnosticos" && <Diagnosticos />}
        {activeTab === "tratamientos" && <Tratamientos />}
        {activeTab === "signos" && <SignosVitales />}
        {activeTab === "antecedentes" && <Antecedentes />}
      </div>
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
