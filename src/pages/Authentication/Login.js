import { useState } from "react"
import { useAuth } from "../../authContext";
import { useNavigate } from "react-router-dom";
import google from '../../imgs/google.png'
import './Login.css'

export function Login(){
    const [user, setUser] = useState({
        email:"",
        password:""
    });
    const {login, signGoogle} = useAuth()
    const navigate = useNavigate();
    const [error,setError] = useState();
    
    const handleChange = ({target:{name,value}})=>{
        setUser({...user,[name]:value})
    }


    const handleSubmit = async (e)=>{
        e.preventDefault()
        setError('')
        try{
            await login(user.email,user.password) 
            navigate("/")
        }catch(err){
            setError(err.message)
        }
    }
    const handleGoogle= async(e)=>{
        e.preventDefault()
        setError('')
        try{
            await signGoogle()
            navigate("/")
        }catch(err){
            setError(err.message)
        }

    }
    return(
    <div className="container">
        {error && <p className="err">{error}</p>}
       <form onSubmit={handleSubmit} className="form">
           <h1>Ingresar</h1>
           <div className="inputs">
           <input type="email" name="email" placeholder="Ingrese su email" onChange={handleChange}/>
           <input type="password" name="password" placeholder="Ingrese su contraseña" onChange={handleChange}/>
           </div>
           <div className="button">
           <a href="/recoverpassword">Olvidaste tu contraseña?</a>
           <button>Ingresar</button>
           <a href="/register">Registrate</a>
           </div>
       </form> 
           <button onClick={handleGoogle} className="google"><img src={google} className="imggoogle" alt="google"/>Inicia sesion con google</button>
    </div>
    )
}