import { useEffect, useState, VFC } from 'react';
import { getSliderData } from '../../utils';
import { Card, NavigationCarousel, NavigationPage } from './components';
import { FlashOffer } from './types';
import './Slider.css';

export const Slider: VFC = () => {
  const [offers, setOffers] = useState<FlashOffer[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBack = () =>
    setCurrentSlide(
      currentSlide === 0
        ? offers.length - 1
        : (currentSlide - 1) % offers.length,
    );

  const handleNext = () => setCurrentSlide((currentSlide + 1) % offers.length);

  useEffect(() => {
    const fetchedOffers = getSliderData();
    // eslint-disable-next-line no-console
    fetchedOffers.then(data => setOffers(data)).catch(e => console.error(e));
  }, []);

  if (offers.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="w-full h-[564px] object-cover">
      {/* <SliderContent
        title={offers[currentSlide].title}
        description={offers[currentSlide].description}
      /> */}
      {window.screenY <= 564 ? <NavigationCarousel /> : <NavigationPage />}
      <Card />
      <img
        className="position-img"
        src={offers[currentSlide].backgroundUrl}
        alt="offer"
      />
      <button type="button" onClick={handleBack}>
        indietro
      </button>
      <button type="button" onClick={handleNext}>
        avanti
      </button>
    </section>
  );
};

Slider.displayName = 'Slider';
