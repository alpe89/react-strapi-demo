import { VFC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Landing } from '../../landing';
import { GasDetails } from '../../offers/GasDetails';
import { GasLightDetails } from '../../offers/GasLightDetails';
import { LightDetails } from '../../offers/LightDetails';

export const AppRoutes: VFC = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/offerte/luce" element={<LightDetails />} />
    <Route path="/offerte/luce-e-gas" element={<GasLightDetails />} />
    <Route path="/offerte/gas" element={<GasDetails />} />
  </Routes>
);
