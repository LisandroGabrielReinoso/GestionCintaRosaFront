import { FormValueLogin } from "../../interfaces/FormValues";
import { RegisterValues } from "../../interfaces/UserRegisterValues";
import api from "../api";
import Responses from "../../interfaces/IResponses";

export const login = async (user: FormValueLogin): Promise<Responses | undefined> => {
    try{
        const response = await api.post('/Usuario/login',user);
        return {success:true, message:'Login exitoso.', token: response.data.token}  
    }catch(error:any){
        console.log(error);
        return {success:false,message:'Error en el servidor: ' + error.respones?.data?.message}
    }
}

export const regiser = async (user: RegisterValues): Promise<Responses> => {
    try{
        await api.post(`$/Usuario/register`,user);
        return {success:true, message:'Usuario registrado con éxito.'}
    }catch(error:any){
        console.log(error);
        return {success:false,message:'Error en el servidor: ' + error.respones?.data?.message}
    }
}

export const updateUser = async(user: RegisterValues): Promise<Responses> => {
    try{
        await api.put(`/Usuario/update`,user);
        return {success:true, message:'Usuario actualizado con éxito.'}
    }catch(error:any){
        console.log(error);
        return {success:false,message:'Error en el servidor: ' + error.respones?.data?.message}
    }
}

export const deleteUser=async(id:number):Promise<Responses>=>{
    try{
        await api.delete(`/Usuario/delete/${id}`);
        return {success:true, message:'Usuario eliminado con éxito.'}
      
    }catch(error: any){
        console.log(error);
        return {success:false,message:'Error en el servidor: ' + error.respones?.data?.message}
    }
}

export const getUsers = async():Promise<Responses<RegisterValues[]>>=>{
    try{
        const response = await api.get(`/Usuario/getAll`);
        return {success: true, message: 'Usuarios obtenidos con éxito.',data:response.data}
        
    }catch(error:any){
        console.log(error);
        return {success:false,message:'Error en el servidor: ' + error.respones?.data?.message}
    }
}

export const getUser= async(id:number):Promise<Responses<RegisterValues[]>>=>{
    try{
        const response = await api.get(`/Usuario/get/${id}`);
        return {success:true, message:'Usuario obtenido con éxito.',data:response.data}
        
    }catch(error:any){
        console.log(error);
        return {success:false,message:'Error en el servidor: ' + error.respones?.data?.message}
    }
}
