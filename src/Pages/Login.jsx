import Dispensario from '../assets/Dispensario.png';
import Logo from '../assets/Logo.png';
import '../Css/Login.css'; 
import Remember from '../Components/Remember.jsx';
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "admin@unapec.edu.do" && password === "1234") {
      navigate("/maindashboard");
    } else {
      alert("Credenciales incorrectas");
    }
  };


  return (
    <div className="Bodylogin">
      <div className="Leftside">
        <img src={Dispensario} alt="Dispensario Médico" />
        <div  className='line'>
          <h1 className='Bienvenidos'>Bienvenido al Dispensario Médico de UNAPEC</h1>
        </div>
        <div class="parrafo">
            <p>Este sistema está a su disposición para optimizar la gestión de pacientes, registrar consultas y 
            administrar recursos, brindándole las herramientas necesarias para ofrecer una atención médica eficaz y 
            organizada en el dispensario de UNAPEC</p>
        </div>
        
      </div>

      <div className="Rightside">
         <div className="Form">

            <div className="Logo">
              <img src={Logo} alt="Logo" />
            </div>

            <div className="Sign-in">

              <div className="nose">
                <h1>¡BIENVENIDO!</h1>
      
                <div className="signbuttons">
                  <div>
                    <label htmlFor="Name">Name</label>
                    <input type="text" placeholder='Email' id="Name" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="Password">Password</label>
                    <input type="password" placeholder='Enter password' id="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <Remember />
                </div>
                <div><button className="Signin" type="button" onClick={handleLogin}>Sign in</button></div>
              </div>
            </div>
         </div>

         <div className="Rights">
            <p> © Copyright 2025 </p>
         </div>
      </div>
    </div>
  );
}

export default Login;
