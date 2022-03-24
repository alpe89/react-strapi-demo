import './BoxPriceLight.css';

type Props = {
  price: string;
  descPrice: string;
  secondElement: boolean;
};

export const BoxPriceLight = ({ price, descPrice, secondElement }: Props) => (
  <div className="box-first">
    <div className={secondElement ? 'box-inside addStyle' : 'box-inside'}>
      <span className="text-6xl font-bold" style={{ color: '#509e2f' }}>
        {price}
      </span>
      <span> €/kWh</span>
      <div>
        <span className="break-words text-sm">{descPrice}</span>
      </div>
    </div>
  </div>
);
