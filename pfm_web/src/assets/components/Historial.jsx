import React ,{useState,useEffect}from 'react';
import './Dashboard.css'; // Estilo CSS para personalizar el diseño
import logo from '../img/LogoPFCIniciales_.png'; // Importa la imagen
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartBar, faFile, faCog, faSignOutAlt ,faChevronRight,faBriefcase, faUsers, faShop, faClock, faGear,  faRightFromBracket,faSearch, faPen, faEye, faTrash, faFilePen} from '@fortawesome/free-solid-svg-icons';

function Historial({user}) {
  const [envioCVData, setEnvioCVData] = useState([]);
  const [historialAsignacionesData, setHistorialAsignacionesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Realiza una solicitud a la API de envío de CVs
    fetch('http://127.0.0.1:8000/api/envio-cvs')
      .then(response => response.json())
      .then(data => {
        setEnvioCVData(data);
      })
      .catch(error => {
        console.error('Error al obtener datos de la API de envío de CVs', error);
      });

    // Realiza una solicitud a la API de historial de asignaciones
    fetch('http://127.0.0.1:8000/api/historial-asignaciones')
      .then(response => response.json())
      .then(data => {
        setHistorialAsignacionesData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener datos de la API de historial de asignaciones', error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="dashboard-container">
      <div className="sidebar">
      <div className='contenedor_img'>
          <img src={logo} alt="PFC" />
        </div>
        {/* Opciones en el lado izquierdo */}
        <ul>
        <li> 
              <a href='/Gerencia'>
              <div className='opcion'>
                    <FontAwesomeIcon icon={faBriefcase}/> 
                    <p>Gerencia</p> 
                    <FontAwesomeIcon icon={faChevronRight}/> 
                </div>
              </a>
            </li>
            <li> 
              <a href='/Comercial'>
              <div className='opcion' >
                    <FontAwesomeIcon icon={faShop}/> 
                    <p>Comercial</p> 
                    <FontAwesomeIcon icon={faChevronRight}/> 
                </div>
              </a>
            </li>
            <li> 
            <a href='/RRHH'>
                <div className='opcion' >
                    <FontAwesomeIcon icon={faUsers}/> 
                    <p>Recursos Humanos</p> 
                    <FontAwesomeIcon icon={faChevronRight}/> 
                </div>
            </a>
            </li>
            <li> 
            <a href='/Historial'>
            <div className='opcion' id='op_seleccionada'>
                    <FontAwesomeIcon icon={faClock}/> 
                    <p>Historial</p> 
                    <FontAwesomeIcon icon={faChevronRight}/> 
                </div>
            </a>
               
            </li>
          {/* Agrega más opciones según tus necesidades */}
        </ul>
        {/* Opciones de ajustes y cerrar sesión en la parte inferior */}
        <div className="bottom-options">
        <div className='opcion'>
                    <p>Ajustes</p> 
                    <FontAwesomeIcon icon={faGear}/> 
                </div>
                <a href='/login'>
                  <div className='opcion'>
                      <p>Cerrar Sesion</p> 
                      <FontAwesomeIcon icon={faRightFromBracket}/> 
                  </div>
                </a>
        </div>
      </div>
      <div className="content">
        {/* Barra superior con el logo */}
        <div className="topbar">
          <div className="search-box">
            <div className="user-info">
            
              
            </div>
            <input
              type="text"
              placeholder="Buscar..."
              className="search-input"
            />
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </div>
        </div>
        {/* Tabla de datos de envío de CVs */}
        <div className="table-container">
          <h2>Envío de CVs</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Plaza de Trabajo ID</th>
                <th>Candidato ID</th>
                <th>Fecha de Envío de CV</th>
                <th>Número de Terna</th>
              </tr>
            </thead>
            <tbody>
              {envioCVData.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.plaza_trabajo_id}</td>
                  <td>{item.candidato_id}</td>
                  <td>{item.fecha_envio_cv}</td>
                  <td>{item.numero_terna}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Tabla de datos de historial de asignaciones */}
        <div className="table-container">
          <h2>Historial de Asignaciones</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Plaza de Trabajo ID</th>
                <th>Analista de RRHH ID</th>
                <th>Fecha de Asignación</th>
                <th>Fecha de Desasignación</th>
              </tr>
            </thead>
            <tbody>
              {historialAsignacionesData.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.plaza_trabajo_id}</td>
                  <td>{item.analista_rrhh_id}</td>
                  <td>{item.fecha_asignacion}</td>
                  <td>{item.fecha_desasignacion || 'No desasignado'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        {/* Gráfica */}
        <div className="chart">
          {/* Agrega tu gráfica aquí */}
          
        </div>
      </div>
    </div>
  );
}

export default Historial;
