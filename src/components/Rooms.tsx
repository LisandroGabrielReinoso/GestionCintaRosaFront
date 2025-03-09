import SummaryCard from "./ui/SummaryCard"

const Rooms = () => {
  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
         <div className=" bg-amber-100 p-4 w-64 ml-auto rounded-lg">
            <SummaryCard title="Camas Activas" count={5}/>
            <br />
            <SummaryCard title="Camas Desocupadas" count={2}/>
            <br />
            <SummaryCard title="Camas Ocupadas" count={1} highlight={true}/>
        </div>

    </div>
  )
}

export default Rooms