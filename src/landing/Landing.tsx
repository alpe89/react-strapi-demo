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

  const titleFirst = 'Offerte Luce e Gas';
  const descFirst = 'Tutte le offerte per luce e gas in un unica soluzione';
  const imgUrlFirst =
    'https://www.edisonenergia.it/wps/wcm/connect/2db019d4-c35d-413f-b11a-8c1fe2031555/desktop/3_3_web_desktop.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-2db019d4-c35d-413f-b11a-8c1fe2031555-desktop-nZfjY8v';

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
      <section style={{ margin: '0 150px' }}>
        <OfferCard title={titleFirst} desc={descFirst} img={imgUrlFirst} />
      </section>
    </main>
  );
};

Landing.displayName = 'Landing';
