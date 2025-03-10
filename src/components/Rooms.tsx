import QuickAccessButton from "./ui/QuickAccessButton"
import SummaryCard from "./ui/SummaryCard"
import {FaPlus, FaEdit, FaTrash} from 'react-icons/fa'
import Button from "./ui/Button"
import Input from "./ui/Input"

const Rooms = () => {
  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
       <div className="bg-gray-800 p-4 rounded-xl shadow-lg flex gap-4">
        <QuickAccessButton icon={<FaPlus />} text="Nueva Sala" />
        <QuickAccessButton icon={<FaEdit />} text="Editar Sala" />
        <QuickAccessButton icon={<FaTrash />} text="Eliminar Sala" />
        <Input
          placeholder="Buscar Sala..."
          className="w-full h-15 bg-gray-800 text-white border-gray-700 focus:border-gold-300 py-2 px-3"
        />
        <Button className="bg-gold-400 text-gray-900 h-13">Buscar</Button>
      </div>
      <div className="bg-amber-500 p-4 w-full flex justify-around rounded-lg">
        <SummaryCard title="Camas Activas" count={5} />
        <br />
        <SummaryCard title="Camas Desocupadas" count={2} />
        <br />
        <SummaryCard title="Camas Ocupadas" count={1} highlight={true} />
      </div>
      <br />
    </div>
  )
}

export default Rooms