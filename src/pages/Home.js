import { useAuth } from "../authContext"
import { Publications } from "../components/Publicaciones/Publications"
import { Publicar } from "../components/Publicar"
import { useState } from "react"
import {db} from '../firebase-config'
import { collection, onSnapshot,query, orderBy,getDocs} from "firebase/firestore"; 
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image from '../imgs/user.png'
import './Home.css'


export function Home(){

    const {user,logOut} = useAuth()
    const [publi,setPubli] = useState([])
    const navigate = useNavigate();
    

    const handleLogOut=async()=>{
        await logOut()
    }
    const handleLogin=()=>{
        navigate('/login')
    }

    const getpubli=async()=>{
        
         const querySnapshots = collection(db, `publicaciones`)
        if(user){

            const qery =query(querySnapshots, orderBy('creado',"desc"))
            const Snapshot = onSnapshot(qery,(querySnapshot)=>{
                let publicaciones = [] 
                querySnapshot.forEach((doc)=>{
                    publicaciones.push({...doc.data()})
                })
                setPubli(publicaciones)
            })
            return Snapshot
        }else{
            const querySnapshot = collection(db, `publicaciones`);
            const Snapshot = await getDocs(querySnapshot)
            const result = Snapshot.docs.map(doc=> doc.data())
            setPubli(result)
            return Snapshot
        }

    }

    useEffect(()=>{
        getpubli()
    })

    return (
    <div>
        <header>
            <div  className="header-home">

            <div className="userinfo">
            {
                
                user && user.photoURL ?
                <img src={user.photoURL} alt="" />
                :
                 <img src={image} alt=""/> 
            }
            <h3>{user ? user.displayName ||user.email : "Bienvenido"}</h3>
            </div>            
            {
                user ? <button className="logout" onClick={handleLogOut}>Cerrar Sesion</button>
                : <button className="login" onClick={handleLogin}>Iniciar Sesion</button>
            }

            </div>
        </header>
        <Publicar />
        <div className="publicaciones" >
            <Publications posts={publi}/>
        </div>
    
    </div>
    )
} 