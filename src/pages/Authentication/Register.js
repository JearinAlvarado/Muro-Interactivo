import { useState } from "react"
import { useAuth } from "../../authContext";
import { useNavigate } from "react-router-dom";
import './Login.css'

export  function Register(){
    const [user, setUser] = useState({
        email:"",
        password:""
    });
    const {signUp} = useAuth()
    const navigate = useNavigate();
    const [error,setError] = useState();

    
    const handleChange = ({target:{name,value}})=>{
        setUser({...user,[name]:value})
    }


    const handleSubmit = async (e)=>{
        e.preventDefault()
        try{
           await signUp(user.email,user.password)
           navigate("/login");

        }catch(error){
            setError(error.message)
        }
    };
    return(
    <div className="container">
        {error && <p className="err">{error}</p>}
            
        <form onSubmit={handleSubmit} className="form">
            <h1>Registrarse</h1>
            <input name="email" placeholder="Email" onChange={handleChange}></input>
            <input  type="password" name="password" placeholder="Password" onChange={handleChange}></input>
            <button >Register</button>
            <a href="/login">Volver al registro</a>
        </form>
    </div>

    )
}