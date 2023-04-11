import { useState } from "react";
import { useAuth } from "../../authContext";

export function RecoverPassword(){
    const [error,setError] = useState();
    const [email,setEmail] =useState();
    const {reset} = useAuth();

    const handleChange = ({target})=>{
        setEmail(target.value)
    }
    const handlerecoverpassword=async(e)=>{
        e.preventDefault()
        if(!email) setError("Ingrese su email")
       try{
           await reset(email)
           setError('Revisa tu correo')
        }catch(err){
            setError(err.message)
        }
    }
    return(
    <div className="container">
        {error && <p className="err">{error}</p>}

       <form onSubmit={handlerecoverpassword} className="form reset">
           <h1>Recuperar contraseña</h1>
           <input type="email" name="email" placeholder="Ingrese su email" onChange={handleChange}/>
           <button >Enviar</button>
       </form> 
    </div>
    )
}