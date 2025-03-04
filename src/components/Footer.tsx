
function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-6 mt-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          {/* Nombre del sistema */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">Gestión Cinta Rosa</h2>
            <p className="text-sm text-gray-400">Tu sistema de gestión médica confiable.</p>
          </div>
  
          {/* Info de contacto */}
          <div className="mb-4 md:mb-0">
            <p className="text-sm">📍 Pasaje Oncativo 984, San Miguel de Tucumán, Argentina</p>
            <p className="text-sm">📧 lacintaroja@example.com</p>
            <p className="text-sm">📞 +54 381 1234567</p>
          </div>
  
          {/* Redes sociales */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>
        </div>
  
        <div className="text-center text-gray-500 text-xs mt-4">
          © {new Date().getFullYear()} Gestión Cinta Rosa. Todos los derechos reservados.
        </div>
      </footer>
    );
  }
  

export default Footer