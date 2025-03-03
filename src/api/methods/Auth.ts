import api from '../api';
import Responses from '../../interfaces/IResponses';

export const check= async ():Promise<Responses> => {
    try {
        const response = await api.get("/Auth/verify",{
            withCredentials: true,
        });  // 🔥 Endpoint que verifica si el token es válido
        console.log(response)
        return { success: response.data.success, message: response.data.message };
    } catch (error:any) {
        console.log(error);
        return {success:false,message:'Error en el servidor: ' + error.respones?.data?.message}
    }
};