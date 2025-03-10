import { FaUserCog, FaLock, FaPalette, FaBell } from "react-icons/fa";
import Button from "./ui/Button";

const Settings = () => {
  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-yellow-400">Configuración</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {/* Configuración de Cuenta */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaUserCog /> Configuración de Cuenta
          </h2>
          <p className="text-gray-400 mb-4">Actualiza tu información personal y credenciales.</p>
          <Button className="w-full bg-blue-600 hover:bg-blue-700">Editar Perfil</Button>
        </div>

        {/* Seguridad */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaLock /> Seguridad
          </h2>
          <p className="text-gray-400 mb-4">Cambia tu contraseña o activa la autenticación en dos pasos.</p>
          <Button className="w-full bg-red-600 hover:bg-red-700">Configurar Seguridad</Button>
        </div>

        {/* Tema */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaPalette /> Personalización
          </h2>
          <p className="text-gray-400 mb-4">Elige tu tema preferido para la aplicación.</p>
          <Button className="w-full bg-purple-600 hover:bg-purple-700">Cambiar Tema</Button>
        </div>

        {/* Notificaciones */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaBell /> Notificaciones
          </h2>
          <p className="text-gray-400 mb-4">Administra las notificaciones y alertas.</p>
          <Button className="w-full bg-yellow-600 hover:bg-yellow-700">Configurar Notificaciones</Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
