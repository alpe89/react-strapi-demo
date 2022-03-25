import { ReactNode } from 'react';
import { AiFillThunderbolt } from 'react-icons/ai';
import { HiFire } from 'react-icons/hi';
import { ColorCard } from '../../types';
import './OfferDetailContainer.css';

type Props = {
  children: ReactNode;
  urlProject: string;
  color: keyof typeof ColorCard;
};

export const OfferDetailContainer = ({
  children,
  urlProject,
  color,
}: Props) => (
  <div className="relative border-2 border-solid border-gray-200 p-1">
    <div>
      <div className="absolute z-10 bg-white text-2xl">
        {urlProject.includes('/gas') ? (
          <HiFire className={ColorCard[color]} />
        ) : (
          <AiFillThunderbolt className={ColorCard[color]} />
        )}
      </div>
      {children}
    </div>
  </div>
);
