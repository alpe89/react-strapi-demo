import { VFC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Landing } from '../../landing';

export const AppRoutes: VFC = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/offerte/luce" element={<div>Offerta Luce</div>} />
    <Route path="/offerte/luce-e-gas" element={<div>Offerta Luce e Gas</div>} />
    <Route path="/offerte/gas" element={<div>Offerta Gas</div>} />
  </Routes>
);
