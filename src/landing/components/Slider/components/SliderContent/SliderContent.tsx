type Props = { title: string; description: string };

export const SliderContent = ({ title, description }: Props) => (
  <div>
    <div>
      <p>{description}</p>
      <h3>{title}</h3>
      <button type="button">Scopri di più</button>
    </div>
  </div>
);

SliderContent.displayName = 'SliderContent';
