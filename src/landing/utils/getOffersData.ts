import axios from '../../config/http/axios';
import { Offer } from '../components/OfferCard/types';

export const getOffersData = async (): Promise<Offer[]> => {
  try {
    const response = await axios.get(
      '/offerings?publicationState=preview&populate[0]=image',
    );

    const { data } = response;
    return data.data.map((result: any) => {
      const { id, attributes } = result;
      const { title, description, image, main, colors } = attributes;
      const { url } = image.data.attributes;

      return {
        id,
        title,
        description,
        main,
        image: `${process.env.REACT_APP_BASE_URL}${url}`,
        color: colors ?? 'default',
      };
    });
  } catch (err: any) {
    throw new Error('Error fetching /flash-offerings', err);
  }
};
