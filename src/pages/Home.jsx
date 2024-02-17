import React from 'react';
import Project from './Project';
import Skills from './skills/Skills';
import Contact from './Contact';
import About from './about/About';
import TopPage from './toppage/TopPage';

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
