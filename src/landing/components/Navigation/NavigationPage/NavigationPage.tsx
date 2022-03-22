import { NavigationCarousel } from '../NavigationCarousel';
import './NavigationPage.css';
// eslint-disable-next-line import/order
import { GiHamburgerMenu } from 'react-icons/gi';

export const NavigationPage = () => {
  const urlEdisonImg =
    'https://www.edisonenergia.it/EdisonB2CPublicThemeDynamicWAR/themes/html/dynamicSpots/assets/img/logoEdisonOrange.png';

  return (
    <header className="header-style">
      <div className="position-header">
        <div className="logo">
          <img height="65px" width="150px" src={urlEdisonImg} alt="edison" />
        </div>
        <div className="menu">
          <GiHamburgerMenu className="hamburger" />
          <span className="span-text">MENU</span>
        </div>
      </div>
      <NavigationCarousel />
    </header>
  );
};
