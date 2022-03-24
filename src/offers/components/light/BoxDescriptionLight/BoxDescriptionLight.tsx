import './BoxDescription.css';

type Props = {
  title: string;
  description: string;
};

export const BoxDescriptionLight = ({ title, description }: Props) => (
  <div className="box-description">
    <span className="text-3xl font-bold" style={{ color: '#509e2f' }}>
      {title}
    </span>
    <div>
      <span>{description}</span>
    </div>
  </div>
);
