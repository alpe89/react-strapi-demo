import { VFC } from 'react';
import { Slider } from './components';

export const Landing: VFC = () => (
  <main className="h-full w-full">
    <Slider />
  </main>
);

Landing.displayName = 'Landing';
