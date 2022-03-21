import { VFC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Landing } from '../../landing';
import { Offers } from '../../offers';

export const AppRoutes: VFC = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/offerte-luce" element={<Offers />} />
  </Routes>
);
