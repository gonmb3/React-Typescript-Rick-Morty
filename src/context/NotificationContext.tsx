import { createContext, useContext, useState } from "react";
import { Notification } from "../components/Notification";
import { AlertColor } from "@mui/material";

type ContextProps = {
    getError: (msg:string) => void;
    getSuccess:(msg: string) => void;
}

const NotificationContext = createContext<ContextProps | null>  (null);

export const NotificationProvider: React.FC <{children: JSX.Element}> = ({children}) => {

    const [msg, setMsg] = useState("")
    const [open, setOpen] = useState(false)
    const [severity, setSeverity] = useState <AlertColor | undefined>(undefined)
    
    {/* error notif */}
    const getError = (msg:string) => {
        setSeverity("error")
        setOpen(true);
        setMsg(msg) 
    }
   {/* success notif */}
    const getSuccess = (msg:string) => {
        setSeverity("success")
        setOpen(true);
        setMsg(msg) 
    }
        {/* close notif */}
    const handleClose = () => {
        setOpen(false)
    }

    const value = {getError, getSuccess}
   
    return (
        <NotificationContext.Provider value={value}>
            <Notification msg={msg} handleClose={handleClose} open={open} severity={severity} />
                {children}              
        </NotificationContext.Provider>
    )
}


export const useNotification = () => {
    const context = useContext(NotificationContext)
    if(!context) throw new Error("No existe contexto")
    return context
}
