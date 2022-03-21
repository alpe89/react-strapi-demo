import { VFC } from 'react';
import { Routes, Route } from 'react-router-dom';

export const AppRoutes: VFC = () => (
  <Routes>
    <Route path="/" element={<div>Landing page</div>} />
    <Route path="/offerte-luce" element={<div>Offerte luce</div>} />
  </Routes>
);
