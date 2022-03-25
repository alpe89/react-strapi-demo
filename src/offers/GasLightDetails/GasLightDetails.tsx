import { GasDetails } from '../GasDetails';
import { LightDetails } from '../LightDetails';
import { Offers } from '../Offers';

export const GasLightDetails = () => (
  <Offers>
    <LightDetails />
    <div className="mb-12" />
    <GasDetails />
  </Offers>
);
