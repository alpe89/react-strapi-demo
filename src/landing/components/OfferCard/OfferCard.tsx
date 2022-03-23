import './OfferCard.css';
import { AiOutlinePlus } from 'react-icons/ai';

export const OfferCard = () => (
  <section className="margin-section">
    <div className="padding-div">
      <div className="card">
        <div className="div-top">
          <img
            src="https://www.edisonenergia.it/wps/wcm/connect/2db019d4-c35d-413f-b11a-8c1fe2031555/desktop/3_3_web_desktop.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-2db019d4-c35d-413f-b11a-8c1fe2031555-desktop-nZfjY8v"
            alt="img"
          />
          <div className="div-box">
            <div className="title-span">Offerte Luce e Gas</div>
            <div className="description-span">
              Tutte le offerte per luce e gas in un unica soluzione
            </div>
          </div>
        </div>
        <div className="div-bottom">
          <div className="div-show-more">
            scopri di più
            <AiOutlinePlus className="plus-icon" />
          </div>
        </div>
      </div>
    </div>
  </section>
);
