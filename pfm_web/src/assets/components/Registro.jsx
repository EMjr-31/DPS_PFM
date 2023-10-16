import React , { useState, useEffect} from 'react';
import './Login.css'
import logo from '../img/LogoPFC.png'; // Importa la imagen
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faG} from '@fortawesome/free-solid-svg-icons';
import { gapi } from 'gapi-script';
import GoogleLogin from 'react-google-login';
import Modal from 'react-modal'; // Importar react-modal

const Registro = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const clientID= "547404189063-leb79ce7ps5bo93lrmf1hsqhln2aq81m.apps.googleusercontent.com"
  const [user, setUser] = useState({});
  const [loggeIn, setLoggetInfo] = useState(false); 
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar la ventana emergente
  const handleCloseModalAndRedirect = () => {
    setIsModalOpen(false);
    window.location.replace('/login'); // Redirige a la página de inicio de sesión
  };
  

  const onSuccess = (response) => {
    setUser(response.profileObj);
    document.getElementsByClassName("btn").hidden = true;
    console.log("Inicio sesion");
    setIsModalOpen(true)
  }
  const onFailure = (response) => {
    console.log("Error de inicio");
  }
  const handleLogout  = () => {
    setUser({}); 
  }
  useEffect(()=>{
    const start = ()=>{
      gapi.auth2.init({
        clienteid: clienteID
      })
      gapi.load("client:auth2", start)
    }

  },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="login-container">
      <div className="banner">
        <h1>Procesos de Manera Eficiente</h1>
        <p>Una solución integral de gestión y seguimiento de procesos diseñada <br/>para simplificar y optimizar tus operaciones.</p>
      </div>
      <div className="form">
        <div className='contenedor_img'>
          <img src={logo} alt="PFC" />
        </div>
        <div className='contenedor_bienvenida'>
          <h3>REGISTRO DE USUARIOS</h3>
          <p>Ingrese sus credenciales</p>
        </div>
        <form>
        <div>
            <input
              type="email"
              name="email"
              placeholder="Correo Electrónico"
              value={formData.email}
              onChange={handleChange}
            />
            <br />
            <input
              type="text"
              name="username"
              placeholder="Usuario"
              value={formData.username}
              onChange={handleChange}
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
            />
            <br />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirmación de Contraseña"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
         </div>
          <button type="submit">Registrarse</button>
          <GoogleLogin className='btn-google'
              clientId={clientID}
              onSuccess={onSuccess}
              onFailure={onFailure}
              buttonText="Continuar con Google"
              cookiePolicy={"single_host_origin"}
          />
          
          <div className='opciones'>
            <span><a href='/Login'>¿Ya tienes una cuenta? </a>|</span> <span> Ayuda</span> 
          </div>
          <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Usuario registrado"
        className="modal" // Aplica estilos a la modal
        overlayClassName="modal-overlay" // Aplica estilos al fondo de la modal
      >
        <div className="modal-content">
          <h2>Usuario registrado</h2>
          <div className="user-info">
            <div className="user-image">
              <img src={user.imageUrl} alt="Foto de usuario" />
            </div>
            <p>Nombre de usuario: {user.name}</p>
          </div>
          <div className="button-container">
            <button onClick={handleCloseModalAndRedirect}>Aceptar</button>
          </div>
        </div>
      </Modal>
        </form>
      </div>
    </div>
  );
}

export default Registro;
