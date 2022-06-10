import React from 'react';
import logoRoiback from '../../assets/roibackLogo.png'
import './Header.Styles.css'

const Header = () => {
  return (
    <div>
      <header className="App-header">
        <div className="LogoDiv">
          <img src={logoRoiback} className="Logo" alt='' />
        </div>
        <p>
          Prueba Técnica para Roiback
        </p>
      </header>
    </div>
  );
}

export default Header;