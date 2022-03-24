import { useEffect, useLayoutEffect, useMemo, useState, VFC } from 'react';
import { OfferCard, Slider, Navigation } from './components';
import { Offer } from './components/OfferCard/types';
import { getOffersData } from './utils/getOffersData';

export const Landing: VFC = () => {
  const [scrollY, setScrollY] = useState(() => window.screenY);
  const [offers, setOffers] = useState<Offer[]>([]);

  const mainOffer = useMemo(() => offers.find(offer => offer.main), [offers]);

  const otherOffers = useMemo(
    () => offers.filter(offer => !offer.main),
    [offers],
  );

  const gridColumns = useMemo(() => {
    if (otherOffers.length < 2) {
      return 'grid-cols-1';
    }

    if (otherOffers.length === 2) {
      return 'grid-cols-2';
    }

    return 'grid-cols-3';
  }, [otherOffers.length]);

  useLayoutEffect(() => {
    const updateY = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', updateY);

    return () => {
      window.removeEventListener('scroll', updateY);
    };
  }, []);

  useEffect(() => {
    getOffersData().then(data => {
      setOffers(data);
    });
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

      <section className="m-36">
        {mainOffer && (
          <OfferCard
            title={mainOffer.title}
            desc={mainOffer.description}
            img={mainOffer.image}
          />
        )}
      </section>

      <section className={`grid ${gridColumns} gap-6 mx-36 -mt-24`}>
        {otherOffers.map(offer => (
          <OfferCard
            key={offer.id}
            title={offer.title}
            desc={offer.description}
            img={offer.image}
            color={offer.color}
          />
        ))}
      </section>
    </main>
  );
};

Landing.displayName = 'Landing';
