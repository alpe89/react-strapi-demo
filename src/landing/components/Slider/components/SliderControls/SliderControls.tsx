import { FaLessThan, FaGreaterThan } from 'react-icons/fa';

type Props = {
  onBack: () => void;
  onNext: () => void;
};

export const SliderControls = ({ onBack, onNext }: Props) => (
  <div className="absolute right-[5%] bottom-16 flex gap-1">
    <button
      type="button"
      className="p-4 bg-black/80 text-white hover:bg-black"
      onClick={onBack}
    >
      <FaLessThan />
    </button>
    <button
      type="button"
      className="p-4 bg-black/80 text-white hover:bg-black"
      onClick={onNext}
    >
      <FaGreaterThan />
    </button>
  </div>
);

SliderControls.displayName = 'SliderControls';
