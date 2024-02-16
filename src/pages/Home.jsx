import React from 'react';
import TopPage from './TopPage';
import Project from './Project';
import Skills from './skills/Skills';
import Contact from './Contact';
import About from './about/About';

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
