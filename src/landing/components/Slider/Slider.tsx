import { useEffect, useState, VFC } from 'react';
import { getSliderData } from '../../utils';
import { Card, SliderContent, SliderControls } from './components';
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
    <section className="w-full h-[564px] object-cover relative bg-gradient-to-t from-black/60 to-transparent">
      <SliderContent
        title={offers[currentSlide].title}
        description={offers[currentSlide].description}
      />
      <Card />
      <img
        className="w-full h-full"
        src={offers[currentSlide].backgroundUrl}
        alt="offer"
      />
      <SliderControls onBack={handleBack} onNext={handleNext} />
    </section>
  );
};

Slider.displayName = 'Slider';
