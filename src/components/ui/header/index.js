import React from 'react';
import telegraphLogo from '../../../assets/logos/telegraph_logo.svg';
import telegraphLogoMobile from '../../../assets/logos/telegraph_logo_mobile.svg';
import tourismIrelandLogo from '../../../assets/logos/tourism_ireland_logo.svg';
import './style.scss';

export default function Header() {
  return (
    <header>
      <a href="https://www.telegraph.co.uk/" rel="noopener noreferrer" target="_blank">
        <div className="telegraph-logo telegraph-logo--desktop">
          <img src={telegraphLogo} alt="The Telegraph" />
        </div>
        <div className="telegraph-logo telegraph-logo--mobile">
          <img src={telegraphLogoMobile} alt="The Telegraph" />
        </div>
      </a>
      <div className="sponsor-logo">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={tourismIrelandLogo} alt="Tourism Ireland" />
        </a>
      </div>
    </header>
  );
}