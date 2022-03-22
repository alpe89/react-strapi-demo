import axios from '../../config/http/axios';
import { FlashOffer } from '../components/Slider/types';

export const getSliderData = async (): Promise<FlashOffer[]> => {
  try {
    const response = await axios.get(
      '/flash-offerings?publicationState=preview&populate[0]=backgroundImage',
    );

    const { data } = response;
    return data.data.map((result: any) => {
      const { id, attributes } = result;
      const { title, description, backgroundImage } = attributes;
      const { url } = backgroundImage.data.attributes;

      return {
        id,
        title,
        description,
        backgroundUrl: `${process.env.REACT_APP_BASE_URL}${url}`,
      };
    });
  } catch (err: any) {
    throw new Error('Error fetching /flash-offerings', err);
  }
};
