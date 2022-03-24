export enum OfferColors {
  green = 'bg-green-700',
  blue = 'bg-blue-700',
  red = 'bg-red-700',
  orange = 'bg-orange-700',
  default = 'bg-gray-500',
}

export type Offer = {
  id: number;
  title: string;
  description: string;
  main: boolean;
  image: string;
  color: keyof typeof OfferColors;
};
