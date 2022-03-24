import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import { OfferColors } from './types';
import './OfferCard.css';

type Props = {
  title: string;
  desc: string;
  img: string;
  color?: keyof typeof OfferColors;
  linkUrl: string;
  mainOffer?: boolean;
};

export const OfferCard = ({
  title,
  desc,
  img,
  linkUrl,
  color = 'default',
  mainOffer = false,
}: Props) => {
  const imgHeight = mainOffer ? '' : 'h-[156px]';
  const imgScale = mainOffer ? '' : 'hover:scale-1';
  return (
    <div className="border-2 border-solid border-gray-200">
      <div>
        <img
          src={img}
          alt="offer"
          className={`w-full ${imgHeight} ${imgScale} object-cover`}
        />
      </div>
      <div className="pt-2 px-5 pb-12">
        <p className="text-gray-400 text-3xl font-bold uppercase">{title}</p>
        <p>{desc}</p>
      </div>
      <hr className="h-[1px] w-[calc(100% - 50px)] mx-4 border-1 border-solid border-gray-200" />
      <div className="flex justify-end">
        <div className="flex p-6">
          <p className="font-bold text-sm uppercase self-center mr-2">
            Scopri di più
          </p>
          <Link to={linkUrl}>
            <button
              className={`flex justify-center content-center p-2 ${OfferColors[color]} text-white`}
              type="button"
            >
              <AiOutlinePlus />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
