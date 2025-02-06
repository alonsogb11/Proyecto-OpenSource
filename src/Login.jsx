import Dispensario from './assets/Dispensario.png';
import Logo from './assets/Logo.png';
import './Css/Login.css'; // Importa los estilos
import Remember from './Components/Remember.jsx';


function Login() {
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
                     <input type="text" placeholder='Email or phone number' id="Name"/>
                  </div>
                  <div>
                    <label htmlFor="Password">Password</label>
                     <input type="text" placeholder='Enter password' id="Password"/>
                  </div>
                  <Remember />
                </div>
                <div><button class="Signin" type="submit">Sign in</button></div>
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
