export enum ColorCard {
  textGreen = 'text-[#509e2f]',
  textBlue = 'text-[#005BBB]',
}

export type Card = {
  price?: string;
  title?: string;
  description?: string;
  index?: number;
  color: keyof typeof ColorCard;
  textPrice?: string;
  sideDescription?: boolean;
};
