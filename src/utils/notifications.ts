import { toast } from 'react-toastify';

export const successNotification = (message:string)=>{
    toast.success(message,{
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar:false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    })
}
export const errorNotification = (message:string)=>{
    toast.error(message,{
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar:false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        
    })
}