import Tabs from "./ui/Tabs";
import Button from "./ui/Button";
import Input from "./ui/Input";
import QuickAccessButton from "./ui/QuickAccessButton";
import {FaPlus, FaEdit, FaTrash} from 'react-icons/fa'
import AnaliticsPayments from "./microcomponents/AnaliticsPayments";



const Payments = () => {
  const TabsData = [
    {label: "Registro", content: <Principal/>},
    {label: "Analiticas", content: <AnaliticsPayments/>}
  ]
 return(
  <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-yellow-400">Pagos</h1>
      <Tabs tabs={TabsData} />
    </div>
)
 
};


const Principal = ()=>{
  return(
    <div className="p-6 bg-gray-900 text-white min-h-screen">
    <h2 className="text-xl font-bold text-yellow-400 mb-4">Lista de Consultas realizadas</h2>

<div className="bg-gray-800 p-4 rounded-xl shadow-lg col-span-2 flex gap-4">
<QuickAccessButton icon={<FaPlus />} text="Nueva Consulta" />
<QuickAccessButton icon={<FaEdit />} text="Editar Consulta" />
<QuickAccessButton icon={<FaTrash />} text="Eliminar Consulta" />
<Input
placeholder="Busca Consultas..."
className="w-full h-15 bg-gray-800 text-white border-gray-700 focus:border-gold-300 py-2 px-3"
/>
<Button className="bg-gold-400 text-gray-900 h-13">Buscar</Button>
</div>
<br />
</div>
  )
}





export default Payments;
