import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Autentication } from "../services/Autentication";
import "../styles/Login.css";

export const Login = () => {

    const navigate = useNavigate();

    const { loginService } = Autentication();

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const handleSubmitLogin = async(e, email, password) => {
        e.preventDefault();
        
        await loginService(email, password).then((message) => {
            if(message === 'success'){
                navigate('/');
            }
        })
    }

    return(
        <div id="loginPage">
            <section id="log-in">
                <form onSubmit={(e) => handleSubmitLogin(e, loginEmail, loginPassword)}>
                    <h2>Bienvenido😎</h2>
                    <h4>Por favor Complete la Informacion</h4>
                    <div className="log-info">
                        <label htmlFor="email" id="first-one">Email</label>
                        <input type="text" name="email" onChange={(event) => setLoginEmail(event.target.value)}/>
                    </div>
                    <div className="log-info">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="password" onChange={(event) => setLoginPassword(event.target.value)}/>
                    </div>
                    <button id="sign-in-btn">Inicio Sesion</button>
                    <p>¿No a creado una cuenta? Click Aqui<Link to='/register' id="link-registro"> Registrarse</Link></p>
                </form>
            </section>
            <section id="image">
                <div id="circle"></div>
                <div id="top">
                    <div id="top-circle"></div>
                </div>
                <div id="bottom">
                    <div id="bottom-circle"></div>
                </div>
            </section>
        </div>
    )
}