import { React, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Autentication } from "../services/Autentication";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase/firebase";
import "../styles/Register.css";

export const Register = () => {

    const { registerService } = Autentication();

    const [registerName, setRegisterName] = useState('');
    const [registerLastName, setRegisterLastName] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [registerPhoto, setRegisterPhoto] = useState();

    const navigate = useNavigate();

    let uidUser;

    const handleSubmit = async(e, email, password, username, name, last_name, photo) => {
        e.preventDefault();
        
        await registerService(email, password, username, name, last_name).then((newUser) => {
            if(newUser){
                uidUser = newUser.user.uid;
                uploadImage(photo, uidUser);
                navigate('/login');
            }
        })
    }

    const uploadImage = async(photo, uid) => {
        const imageRef = ref(storage, `profiles/${uid}`);
        await uploadBytes(imageRef, photo);
    }

    return(
        <div id="registerPage">
            <form onSubmit={(e) => handleSubmit(e, registerEmail, registerPassword, registerUsername, registerName, registerLastName, registerPhoto)} id="register-form">
                <h2>Registrate</h2>
                <div className="register-info">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="name" onChange={(event) => setRegisterName(event.target.value)}/>
                </div>
                <div className="register-info">
                    <label htmlFor="last_name" >Apellido</label>
                    <input type="text" name="last_name" onChange={(event) => setRegisterLastName(event.target.value)}/>
                </div>
                <div className="register-info">
                    <label htmlFor="email" >Email</label>
                    <input type="email" name="email" onChange={(event) => setRegisterEmail(event.target.value)}/>
                </div>
                <div className="register-info">
                    <label htmlFor="username">Usuario</label>
                    <input type="text" name="username" onChange={(event) => setRegisterUsername(event.target.value)}/>
                </div>
                <div className="register-info">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" onChange={(event) => setRegisterPassword(event.target.value)}/>
                </div>
                <div className="register-info">
                    <label htmlFor="photo">Foto</label>
                    <input id="photo" type="file" name="photo" onChange={(event) => setRegisterPhoto(event.target.files[0])}/>
                </div>
                <button id="register-btn">Registrarse</button>
            </form> 
        </div>
    )
}