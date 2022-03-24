type Props = {
  price?: string;
  title?: string;
  description: string;
  index?: number;
};

export const OfferDetailItem = ({
  price,
  title,
  description,
  index = 0,
}: Props) => (
  <div className="px-2 h-full flex">
    {index > 0 && <div className="bg-gray-300 w-[1px] self-stretch mx-3" />}
    <div>
      {title && <h2 className="text-3xl font-bold text-[#509e2f]">{title}</h2>}
      {price && (
        <h2 className="text-6xl font-bold text-[#509e2f]">
          {price}
          <span className="text-sm text-black font-normal">€/kWh</span>
        </h2>
      )}
      <p className="text-xs mt-2">{description}</p>
    </div>
  </div>
);

OfferDetailItem.displayName = 'OfferDetailItem';
