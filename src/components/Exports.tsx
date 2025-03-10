import { useState } from "react";
import { FaFileCsv, FaFileExcel, FaFilePdf } from "react-icons/fa";
import Button from "./ui/Button";

const Exports = () => {
  const tables = [
    "Pacientes", "Localidad", "Obra_Social", "Obra_SocialxPaciente", "Consulta",
    "Servicios", "Profesionales", "Roles", "Especialidad", "EspecialidadxProfesional",
    "Tratamientos", "Diagnosticos", "Signos_Vitales", "Turnos", "Antecedentes",
    "Salas", "Camas", "PacientesCamas"
  ];

  const [selectedTable, setSelectedTable] = useState("");
  const [format, setFormat] = useState("csv");

  const handleExport = () => {
    if (!selectedTable) {
      alert("Selecciona una tabla primero, culiao!");
      return;
    }
    alert(`Exportando ${selectedTable} en formato ${format.toUpperCase()}...`); 
    // Acá meté la lógica para exportar
  };

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-yellow-400">Exportar Datos</h1>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        <h2 className="text-xl font-semibold mb-4">Selecciona una tabla</h2>
        
        <select
          className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          value={selectedTable}
          onChange={(e) => setSelectedTable(e.target.value)}
        >
          <option value="">-- Selecciona una tabla --</option>
          {tables.map((table) => (
            <option key={table} value={table}>
              {table}
            </option>
          ))}
        </select>

        <h2 className="text-xl font-semibold mt-6 mb-4">Formato de Exportación</h2>
        <div className="flex gap-4">
          <Button className={`flex-1 ${format === "csv" ? "bg-blue-600" : "bg-gray-700"}`} onClick={() => setFormat("csv")}>
            <FaFileCsv className="mr-2" /> CSV
          </Button>
          <Button className={`flex-1 ${format === "excel" ? "bg-green-600" : "bg-gray-700"}`} onClick={() => setFormat("excel")}>
            <FaFileExcel className="mr-2" /> Excel
          </Button>
          <Button className={`flex-1 ${format === "pdf" ? "bg-red-600" : "bg-gray-700"}`} onClick={() => setFormat("pdf")}>
            <FaFilePdf className="mr-2" /> PDF
          </Button>
        </div>

        <Button className="mt-6 w-full bg-yellow-400 text-gray-900" onClick={handleExport}>
          Exportar
        </Button>
      </div>
    </div>
  );
};

export default Exports;
