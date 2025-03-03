import api from '../api';
import IPatients from '../../interfaces/IPatients';
import Responses from '../../interfaces/IResponses';


export const getPatients = async ():Promise<Responses<IPatients>> => {
    try{
        const response = await api.get('/Paciente', {
            withCredentials:true,
        });
        console.log(response)
        return {success:true, data:response.data}
    } catch(error:any){
        console.log(error);
        return {success:false,message:'Error en el servidor: ' + error.respones?.data?.message}
    }
}

export const getOnePatient = async(id:number):Promise<Responses<IPatients>> => {
    try{
        const response = await api.get(`/Paciente/${id}`,{
            withCredentials:true,
        });
        return {success:true, data:response.data}
    } catch(error:any){
        console.log(error);
        return {success:false,message:'Error en el servidor:'+ error.respones?.data?.message}
    }
}

export const createPatient = async(patient:IPatients):Promise<Responses> => {
    try{
        await api.post(`/Paciente/create`,patient,{
            withCredentials:true,
        });
        return {success:true, message:'Paciente creado con éxito.'}
    } catch(error:any){
        console.log(error);
        return {success:false,message:'Error en el servidor:'+ error.respones?.data?.message}
    }
}

export const updatePatient = async(patient:IPatients):Promise<Responses> => {
    try{
        await api.put(`/Paciente/update/${patient.Id}`,patient,{
            withCredentials:true,
        });
        return {success:true, message:'Paciente actualizado con éxito.'}
    } catch(error:any){
        console.log(error);
        return {success:false,message:'Error en el servidor:'+ error.respones?.data?.message}
    }
}

export const deletePatient = async(id:number):Promise<Responses> => {
    try{
        await api.delete(`/Paciente/delete/${id}`,{
            withCredentials:true,
        });
        return {success:true, message:'Paciente eliminado con éxito.'}
    } catch(error:any){
        console.log(error);
        return {success:false,message:'Error en el servidor:'+ error.respones?.data?.message}
    }
}
