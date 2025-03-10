import { useState } from "react";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs = ({ tabs }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      {/* Encabezado de pestañas */}
      <div className="flex border-b border-gray-700">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-white border-b-2 ${
              activeTab === index ? "border-yellow-400 text-yellow-400" : "border-transparent text-gray-400"
            } hover:text-yellow-300 transition`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Contenido dinámico de la pestaña seleccionada */}
      <div className="p-4 bg-gray-800 text-white rounded-b-lg mt-2">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
