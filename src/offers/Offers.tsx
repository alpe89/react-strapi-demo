import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Offers = ({ children }: Props) => (
  <div>
    <div className="justify-center py-11 text-center font-medium text-3xl w-1/2 m-auto ">
      Prezzi
    </div>
    {children}
  </div>
);

Offers.displayName = 'Offers';
