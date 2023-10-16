import React, { useState, useEffect } from 'react';
import './Splash.css';
import logo from '../img/LogoPFCIniciales_.png'; // Importa la imagen

const SplashScreen = () => {
    const [loadingProgress, setLoadingProgress] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          if (loadingProgress < 150) {
            setLoadingProgress(loadingProgress + 1);
          }else {
            // Cuando el progreso llega al 100%, redirige a la página de inicio de sesión
            clearInterval(interval); // Detén el intervalo
            window.location.replace('/login');
          }
        }, 20); // Ajusta la velocidad de llenado de la barra
    
        return () => clearInterval(interval);
      }, [loadingProgress]);

  return (
   <>
     <div className="splash-screen">
      <div className="splash-content">
        <img src={logo} alt="Logo de la aplicación" />
        <div className="progress-bar">
          <div className="progress" style={{ width: `${loadingProgress}%` }}></div>
        </div>
      </div>

      {/* Pie de página */}
      <footer>
        <div>
            <p data-cc="http://creativecommons.org/ns#" data-dct="http://purl.org/dc/terms/">
                <span data-property="dct:title">Proces Flow Mate</span> by{' '}
                <span data-property="cc:attributionName">PFM</span> is licensed under{' '}
                <a
                href="http://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1"
                target="_blank"
                rel="license noopener noreferrer"
                style={{ display: 'inline-block' }}
                >
                CC BY-NC-ND 4.0
                <img
                    style={{ height: '22px', margin: '0 3px', verticalAlign: 'text-bottom' }}
                    src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
                />
                <img
                    style={{ height: '22px', margin: '0 3px', verticalAlign: 'text-bottom' }}
                    src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
                />
                <img
                    style={{ height: '22px', margin: '0 3px', verticalAlign: 'text-bottom' }}
                    src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"
                />
                <img
                    style={{ height: '22px', margin: '0 3px', verticalAlign: 'text-bottom' }}
                    src="https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1"
                />
                </a>
            </p>
        </div>

      </footer>
    </div>
   </>
  );
};

export default SplashScreen;
