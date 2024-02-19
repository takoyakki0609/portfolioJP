import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';

import '../../index.css';

const Layout = () => {
  return (
    <>
      <div id="starContainer">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>

        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
