import { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import "chart.js/auto";

const Payments = () => {
  const [payments, setPayments] = useState([
    { id: 1, paciente: "Juan Pérez", monto: 5000, metodo: "Tarjeta" },
    { id: 2, paciente: "María López", monto: 3000, metodo: "Efectivo" },
    { id: 3, paciente: "Carlos Gómez", monto: 7000, metodo: "Transferencia" },
  ]);

  // Datos para el gráfico de barras (total recaudado por método de pago)
  const barData = {
    labels: ["Tarjeta", "Efectivo", "Transferencia"],
    datasets: [
      {
        label: "Recaudación",
        data: [
          payments.filter(p => p.metodo === "Tarjeta").reduce((sum, p) => sum + p.monto, 0),
          payments.filter(p => p.metodo === "Efectivo").reduce((sum, p) => sum + p.monto, 0),
          payments.filter(p => p.metodo === "Transferencia").reduce((sum, p) => sum + p.monto, 0),
        ],
        backgroundColor: ["#facc15", "#f87171", "#34d399"],
      },
    ],
  };

  // Datos para el gráfico de torta (cantidad de pagos por método)
  const pieData = {
    labels: ["Tarjeta", "Efectivo", "Transferencia"],
    datasets: [
      {
        data: [
          payments.filter(p => p.metodo === "Tarjeta").length,
          payments.filter(p => p.metodo === "Efectivo").length,
          payments.filter(p => p.metodo === "Transferencia").length,
        ],
        backgroundColor: ["#facc15", "#f87171", "#34d399"],
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <h2 className="text-2xl font-bold">Pagos</h2>
      <p className="text-gray-400">Gestión de pagos y estadísticas</p>

      {/* Lista de pagos */}
      <div className="mt-4 bg-gray-800 p-4 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold">Historial de Pagos</h3>
        <table className="w-full mt-2 border-collapse">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="text-left p-2">Paciente</th>
              <th className="text-left p-2">Monto</th>
              <th className="text-left p-2">Método</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((pago) => (
              <tr key={pago.id} className="border-b border-gray-700">
                <td className="p-2">{pago.paciente}</td>
                <td className="p-2">${pago.monto}</td>
                <td className="p-2">{pago.metodo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Analíticas */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold">Recaudación por Método</h3>
          <Bar data={barData} />
        </div>

        <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold">Cantidad de Pagos por Método</h3>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default Payments;
