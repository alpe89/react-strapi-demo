type Props = { title: string; description: string };

export const SliderContent = ({ title, description }: Props) => (
  <div className="absolute left-[38%] w-[62%] top-1/2 text-white">
    <h4>{description}</h4>
    <h2 className="text-5xl uppercase my-4">{title}</h2>
    <button type="button" className="p-4 text-white bg-black">
      Scopri di più
    </button>
  </div>
);

SliderContent.displayName = 'SliderContent';
