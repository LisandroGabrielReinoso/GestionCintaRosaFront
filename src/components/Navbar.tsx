
const Navbar = ({ userName }: { userName: string }) => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center fixed top-0 w-full shadow-md">
      <h1 className="text-xl font-bold">Gestion Cinta Rosa</h1>
      <div className="flex items-center gap-4">
        <span className="text-sm">{userName}</span>
      </div>
    </nav>
  );
};

export default Navbar;
