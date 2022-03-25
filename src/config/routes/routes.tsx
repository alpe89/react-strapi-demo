import { VFC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Landing } from '../../landing';
import { GasDetails } from '../../offers/GasDetails';
import { LightDetails } from '../../offers/LightDetails';

export const AppRoutes: VFC = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/offerte/luce" element={<LightDetails />} />
    <Route
      path="/offerte/luce-e-gas"
      element={
        // eslint-disable-next-line react/jsx-wrap-multilines
        <div>
          <LightDetails />
          <GasDetails />
        </div>
      }
    />
    <Route path="/offerte/gas" element={<GasDetails />} />
  </Routes>
);
