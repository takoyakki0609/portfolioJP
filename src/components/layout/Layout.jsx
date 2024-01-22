import { Outlet } from 'react-router-dom';
import Gnb from './header/Gnb';
import Footer from './footer/Footer';

const Layout = () => {
  return (
    <>
      <Gnb />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
