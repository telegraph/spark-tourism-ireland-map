import React from 'react';
import telegraphLogo from '../../../assets/logos/telegraph_logo.svg';
import tourismIrelandLogo from '../../../assets/logos/tourism_ireland_logo.svg';
import './style.scss';

export default function Header() {
  return (
    <header>
      <div className="telegraph-logo">
        <img src={telegraphLogo} alt="The Telegraph" />
      </div>
      <div className="sponsor-logo">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={tourismIrelandLogo} alt="Tourism Ireland" />
        </a>
      </div>
    </header>
  );
}