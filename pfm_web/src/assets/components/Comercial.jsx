import React ,{useState,useEffect}from 'react';
import './Dashboard.css'; // Estilo CSS para personalizar el diseño
import logo from '../img/LogoPFCIniciales_.png'; // Importa la imagen
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartBar, faFile, faCog, faSignOutAlt ,faChevronRight,faBriefcase, faUsers, faShop, faClock, faGear,  faRightFromBracket,faSearch, faPen, faEye, faTrash, faFilePen} from '@fortawesome/free-solid-svg-icons';

function Comercial({user}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Realiza una solicitud a la API para obtener datos JSON de clientes
    fetch('http://127.0.0.1:8000/api/clientes')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener datos de la API', error);
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
              <div className='opcion' >
                    <FontAwesomeIcon icon={faBriefcase}/> 
                    <p>Gerencia</p> 
                    <FontAwesomeIcon icon={faChevronRight}/> 
                </div>
              </a>
            </li>
            <li> 
              <a href='/Comercial' >
              <div className='opcion' id='op_seleccionada'>
                    <FontAwesomeIcon icon={faShop}/> 
                    <p>Comercial</p> 
                    <FontAwesomeIcon icon={faChevronRight}/> 
                </div>
              </a>
            </li>
            <li> 
            <a href='/RRHH'>
                <div className='opcion'>
                    <FontAwesomeIcon icon={faUsers}/> 
                    <p>Recursos Humanos</p> 
                    <FontAwesomeIcon icon={faChevronRight}/> 
                </div>
            </a>
            </li>
            <li> 
            <a href='/Historial'>
            <div className='opcion'>
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
        {/* Tabla de datos con opciones de ver, eliminar y modificar */}
        <div className="table-container">
          <h2>Clientes</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre Empresa</th>
                <th>Rubro</th>
                <th>Nombre de Contacto</th>
                <th>Teléfono</th>
                <th>Correo Electrónico</th>
                <th>Ubicación</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {data.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.nombre_empresa}</td>
                  <td>{item.rubro}</td>
                  <td>{item.nombre_contacto}</td>
                  <td>{item.telefono}</td>
                  <td>{item.correo_electronico}</td>
                  <td>{item.ubicacion}</td>
                  <td className="opciones-contenedor">
                    <button className='btn btn-ver'> <FontAwesomeIcon icon={faEye} /> </button>
                    <button className='btn btn-modificar'> <FontAwesomeIcon icon={faPen} /> </button>
                    <button className='btn btn-eliminar'> <FontAwesomeIcon icon={faTrash} /> </button>
                  </td>
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

export default Comercial;
