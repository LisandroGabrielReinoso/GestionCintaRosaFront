import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import ContextType from "../interfaces/IAuthContextType";
import {check} from '../api/methods/Auth';

const AuthContext = createContext<ContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const verify = await check();
                console.log("Resultado de checkAuth:", verify);
                setIsAuthenticated(verify.success); // Solo seteamos una vez al inicio
            } catch (error) {
                console.error("Error en checkAuth:", error);
                setIsAuthenticated(false);
            }
        };
        checkAuth();
    }, []); // 🔥 SOLO CORRE UNA VEZ, NO SE REINICIA CON `isAuthenticated`

    const login = async () => {
        try {
            const response = await check();
            console.log("Resultado de login:", response);
            setIsAuthenticated(response.success);
        } catch (error) {
            console.error("Error al verificar sesión:", error);
            setIsAuthenticated(false);
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = ()=>{
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("AuthContext must be used within a AuthProvider");
    }
    return context;
}