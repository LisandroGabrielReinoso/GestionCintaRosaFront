import { useAuth } from "../hooks/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
    const { isAuthenticated } = useAuth();

    console.log("isAuthenticated en ProtectedRoutes:", isAuthenticated);

    if (isAuthenticated === null) {
        return <p>Cargando...</p>; // 🔥 MOSTRÁ ALGO MIENTRAS SE CARGA
    }

    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
