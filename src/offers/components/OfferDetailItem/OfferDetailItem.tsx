import { Card, ColorCard } from '../../types';

export const OfferDetailItem = ({
  price,
  title,
  description,
  index = 0,
  color,
  textPrice,
  sideDescription,
}: Card) => (
  <div className="px-2 h-full flex">
    {index > 0 && <div className="bg-gray-300 w-[1px] self-stretch mx-3" />}
    <div>
      {title && (
        <h2 className={`text-3xl font-bold ${ColorCard[color]}`}>{title}</h2>
      )}
      {price && (
        <h2 className={`text-6xl font-bold ${ColorCard[color]}`}>
          {price}
          <span className="text-sm text-black font-normal">{textPrice}</span>
        </h2>
      )}
      <p className={sideDescription ? 'text-base mt-2 h-14' : '"text-xs mt-2"'}>
        {description}
      </p>
    </div>
  </div>
);

OfferDetailItem.displayName = 'OfferDetailItem';
