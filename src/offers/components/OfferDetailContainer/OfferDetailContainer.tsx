import { ReactNode } from 'react';
import { AiFillThunderbolt } from 'react-icons/ai';
import './BoxContainerLight.css';

type Props = {
  children: ReactNode;
};

export const OfferDetailContainer = ({ children }: Props) => (
  <div className="relative border-2 border-solid border-gray-200 p-1">
    <div>
      <div className="absolute z-10 bg-white text-2xl">
        <AiFillThunderbolt color="#509E2F" />
      </div>
      {children}
    </div>
  </div>
);
