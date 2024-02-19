import Skills from '../skills/Skills';
import About from '../about/About';
import TopPage from '../toppage/TopPage';
import Project from '../project/Project';
import Contact from '../contact/Contact';
import { useEffect, useRef, useState } from 'react';
import * as St from './home.styled';

console.log(
  `%c
██╗   ██╗ ██████╗ ██████╗  ██████╗ ███████╗██╗██╗  ██╗██╗   ██╗
╚██╗ ██╔╝██╔═══██╗██╔══██╗██╔═══██╗██╔════╝██║██║ ██╔╝██║   ██║
 ╚████╔╝ ██║   ██║██████╔╝██║   ██║███████╗██║█████╔╝ ██║   ██║
  ╚██╔╝  ██║   ██║██╔══██╗██║   ██║╚════██║██║██╔═██╗ ██║   ██║
   ██║   ╚██████╔╝██║  ██║╚██████╔╝███████║██║██║  ██╗╚██████╔╝
   ╚═╝    ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝╚═╝  ╚═╝ ╚═════╝ 
`,
  'color:#4867A9',
);
console.log(
  `%c
 ██████╗ ███╗   ██╗███████╗ ██████╗  █████╗ ██╗
██╔═══██╗████╗  ██║██╔════╝██╔════╝ ██╔══██╗██║
██║   ██║██╔██╗ ██║█████╗  ██║  ███╗███████║██║
██║   ██║██║╚██╗██║██╔══╝  ██║   ██║██╔══██║██║
╚██████╔╝██║ ╚████║███████╗╚██████╔╝██║  ██║██║
 ╚═════╝ ╚═╝  ╚═══╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝
`,
  'color:#A294BC',
);
console.log(
  `%c
███████╗██╗███╗   ███╗ █████╗ ███████╗██╗   ██╗
██╔════╝██║████╗ ████║██╔══██╗██╔════╝██║   ██║
███████╗██║██╔████╔██║███████║███████╗██║   ██║
╚════██║██║██║╚██╔╝██║██╔══██║╚════██║██║   ██║
███████║██║██║ ╚═╝ ██║██║  ██║███████║╚██████╔╝
╚══════╝╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝ ╚═════╝ 
`,

  'color:#FCC1CF',
);

const Home = () => {
  const sectionsRefs = {
    Main: useRef(null),
    about: useRef(null),
    project: useRef(null),
    skills: useRef(null),
    contact: useRef(null),
  };

  // 현재 활성화된 섹션을 추적하는 상태
  const [activeSection, setActiveSection] = useState('');

  // 특정 섹션으로 스크롤 이동
  const scrollToSection = (sectionKey) => {
    const section = sectionsRefs[sectionKey];
    if (section && section.current) {
      section.current.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionKey); // 활성화된 섹션 상태 업데이트
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = Object.keys(sectionsRefs).find((key) => {
        const section = sectionsRefs[key].current;
        if (section) {
          const { top } = section.getBoundingClientRect();
          return top >= 0 && top <= window.innerHeight / 2;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // 클린업 함수
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // 빈 배열을 의존성 목록으로 사용하여 컴포넌트 마운트 시에만 실행
  return (
    <>
      <St.Navigator>
        {Object.keys(sectionsRefs).map((key) => (
          <St.NaviCategory
            key={key}
            onClick={() => scrollToSection(key)}
            style={{
              color: activeSection === key ? '#00ADB5' : '#eeeeee', // 현재 활성화된 섹션에 따라 색상 변경
            }}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </St.NaviCategory>
        ))}
      </St.Navigator>
      <div ref={sectionsRefs.Main}>
        <TopPage />
      </div>
      <div ref={sectionsRefs.about}>
        <About />
      </div>
      <div ref={sectionsRefs.project}>
        <Project />
      </div>
      <div ref={sectionsRefs.skills}>
        <Skills />
      </div>
      <div ref={sectionsRefs.contact}>
        <Contact />
      </div>
    </>
  );
};

export default Home;
