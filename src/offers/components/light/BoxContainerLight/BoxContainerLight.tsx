import { ReactNode } from 'react';
import { AiFillThunderbolt } from 'react-icons/ai';
import './BoxContainerLight.css';

type Props = {
  children: ReactNode;
};

export const BoxContainerLight = ({ children }: Props) => (
  <div className="div-container">
    <div className="div-bg-color">
      <div className="div-box-icon">
        <AiFillThunderbolt color="#509E2F" />
      </div>
      {children}
    </div>
  </div>
);
