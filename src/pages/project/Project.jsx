import * as St from './project.styled';
import WorkSlide from '../../components/workslide/WorkSlide';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Project() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <St.Container>
      <St.ProjectWrapper>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <St.Title>PROJECT</St.Title>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <WorkSlide />
        </div>
      </St.ProjectWrapper>
    </St.Container>
  );
}
