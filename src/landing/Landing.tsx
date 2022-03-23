import { useLayoutEffect, useState, VFC } from 'react';
import { OfferCard, Slider, Navigation } from './components';

export const Landing: VFC = () => {
  const [scrollY, setScrollY] = useState(() => window.screenY);

  useLayoutEffect(() => {
    const updateY = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', updateY);

    return () => {
      window.removeEventListener('scroll', updateY);
    };
  }, []);

  return (
    <main className="h-full w-full">
      <Navigation scrollPage={scrollY} />
      <Slider />
      <div className="w-full h-[200px] my-32 flex justify-center content-center">
        <img
          src="https://www.edisonenergia.it/wps/wcm/connect/e44fe310-e404-4042-920e-90cccb498902/smartphone/MOBILE_Negozi_Edison+355x200.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-e44fe310-e404-4042-920e-90cccb498902-smartphone-n-jtcYq"
          alt="edison offer"
        />
      </div>
      <OfferCard />
    </main>
  );
};

Landing.displayName = 'Landing';
