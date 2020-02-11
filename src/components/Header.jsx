import React from 'react';

const Header = (props) => (
  <div className="header">
    <div className = "container">
      <h1 className="header__title">Döntsön a gép helyetted!</h1>
      {props.subtitle && <h2 className="header__subtitle">{props.subtitle} 
      <br/> Bízd a számítógépre a döntést!</h2>}
    </div>
  </div>
)

export default Header;