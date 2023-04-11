import './App.css';
import {Routes,Route} from "react-router-dom"
import {Home} from './pages/Home';
import {Register} from './pages/Authentication/Register';
import {Login} from  './pages/Authentication/Login'
import {AuthProvider} from './authContext'
import {RecoverPassword} from './pages/Authentication/RecoverPassword'

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={
          <Home />
        }/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/recoverpassword' element={<RecoverPassword/>}/>

      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;