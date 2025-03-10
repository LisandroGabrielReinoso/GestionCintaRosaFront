import Tabs from "./ui/Tabs";

const Profile = () => {
  const tabsData = [
    { label: "Información Personal", content: <p>Nombre: Juan Pérez</p> },
    { label: "Configuración", content: <p>Ajustes de cuenta</p> },
    { label: "Historial", content: <p>Últimas actividades</p> },
  ];

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-yellow-400">Perfil</h1>
      <Tabs tabs={tabsData} />
    </div>
  );
};

export default Profile;
