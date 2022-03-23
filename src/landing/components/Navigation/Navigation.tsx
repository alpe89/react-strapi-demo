import './Navigation.css';
// eslint-disable-next-line import/order
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsHouseDoor, BsChatText } from 'react-icons/bs';
import { RiSuitcaseLine } from 'react-icons/ri';
import { GoMail } from 'react-icons/go';
import { MdOutlinePersonOutline } from 'react-icons/md';

type Scroll = {
  scrollPage: number;
};

export const Navigation = ({ scrollPage }: Scroll) => {
  const urlEdisonImg =
    'https://www.edisonenergia.it/EdisonB2CPublicThemeDynamicWAR/themes/html/dynamicSpots/assets/img/logoEdisonOrange.png';

  return (
    <>
      {/* HEADER 1 */}
      <header
        className={scrollPage > 564 ? 'header-style' : 'header-style-hidden'}
      >
        <div className="position-header">
          <div className="logo">
            <img height="65px" width="150px" src={urlEdisonImg} alt="edison" />
          </div>
          <div className="menu">
            <GiHamburgerMenu className="hamburger" />
            <span className="span-text">MENU</span>
          </div>
        </div>
      </header>

      {/* HEADER 2 */}
      <header>
        <div
          className={
            scrollPage < 564 ? 'navigation-button' : 'navigation-button-page'
          }
        >
          {/* Per la tua casa */}
          <div className={scrollPage < 564 ? 'home' : 'home-page'}>
            <div className="position-icon">
              <BsHouseDoor fontSize="22px" />
            </div>
            <div className="span">
              <span>Per la tua casa</span>
            </div>
          </div>

          {/* Per il tuo business */}
          <div className={scrollPage < 564 ? 'common' : 'common-page'}>
            <div className="position-icon">
              <RiSuitcaseLine fontSize="22px" />
            </div>
            <div className="span">
              <span>Per il tuo business</span>
            </div>
          </div>

          {/* Contatti */}
          <div className={scrollPage < 564 ? 'common' : 'common-page'}>
            <div className="position-icon">
              <GoMail fontSize="22px" />
            </div>
            <div className="span">
              <span>Contatti</span>
            </div>
          </div>

          {/* Per la tua casa */}
          <div className={scrollPage < 564 ? 'common' : 'common-page'}>
            <div className="position-icon">
              <BsChatText fontSize="22px" />
            </div>
            <div className="span">
              <span>Tips</span>
            </div>
          </div>

          {/* Area privata */}
          <div className={scrollPage < 564 ? 'login' : 'login-page'}>
            <div className="position-icon">
              <MdOutlinePersonOutline fontSize="22px" />
            </div>
            <div>
              <span>Area privata</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
