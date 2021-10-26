import { toast } from "react-toastify";

export const messageError = (message)=>{
    toast.error(message , {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

} 
export const messageSuccess = (message)=>{
    toast.success(message , {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

} 