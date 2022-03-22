import { useLayoutEffect, useState, VFC } from 'react';
import { NavigationCarousel, NavigationPage, Slider } from './components';

export const Landing: VFC = () => {
  const [screenY, setScreenY] = useState(() => window.screenY);

  useLayoutEffect(() => {
    setScreenY(window.screenY);
  }, []);

  return (
    <main className="h-full w-full">
      {screenY <= 564 ? <NavigationCarousel /> : <NavigationPage />}
      <Slider />
    </main>
  );
};

Landing.displayName = 'Landing';
