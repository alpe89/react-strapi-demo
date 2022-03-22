import { VFC } from 'react';
import './HeaderButton.css';
import { BsHouseDoor, BsChatText } from 'react-icons/bs';
import { RiSuitcaseLine } from 'react-icons/ri';
import { GoMail } from 'react-icons/go';
import { MdOutlinePersonOutline } from 'react-icons/md';

export const HeaderButton: VFC = () => (
  <div className="navigation-button">
    {/* Per la tua casa */}
    <div className="home div-button">
      <div className="position-icon">
        <BsHouseDoor fontSize="22px" />
      </div>
      <div className="span-text">
        <span>Per la tua casa</span>
      </div>
    </div>

    {/* Per il tuo business */}
    <div className="common div-button">
      <div className="position-icon">
        <RiSuitcaseLine fontSize="22px" />
      </div>
      <div className="span-text">
        <span>Per il tuo business</span>
      </div>
    </div>

    {/* Contatti */}
    <div className="common div-button">
      <div className="position-icon">
        <GoMail fontSize="22px" />
      </div>
      <div className="span-text">
        <span>Contatti</span>
      </div>
    </div>

    {/* Per la tua casa */}
    <div className="common div-button">
      <div className="position-icon">
        <BsChatText fontSize="22px" />
      </div>
      <div className="span-text">
        <span>Tips</span>
      </div>
    </div>

    {/* Area privata */}
    <div className="login">
      <div className="position-icon">
        <MdOutlinePersonOutline fontSize="22px" />
      </div>
      <div>
        <span>Area privata</span>
      </div>
    </div>
  </div>
);
