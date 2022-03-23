import './OfferCard.css';
import { AiOutlinePlus } from 'react-icons/ai';

type Props = {
  title: string;
  desc: string;
  img: string;
};

export const OfferCard = ({ title, desc, img }: Props) => (
  <section>
    <div className="padding-div">
      <div className="card">
        <div className="div-top">
          <img src={img} alt="img" />
          <div className="div-box">
            <div className="title-span">{title}</div>
            <div className="description-span">{desc}</div>
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
