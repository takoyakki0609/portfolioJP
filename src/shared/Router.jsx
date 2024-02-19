import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Layout from '../components/layout/Layout';
import Home from '../pages/home/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
