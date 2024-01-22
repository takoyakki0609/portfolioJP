import React from 'react';
import About from './About';
import TopPage from './TopPage';
import Project from './Project';
import Skills from './Skills';
import Contact from './Contact';

const Home = () => {
  return (
    <>
      <TopPage />
      <About />
      <Project />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
