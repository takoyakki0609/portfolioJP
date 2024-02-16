import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.section`
  height: 100vh;
  overflow: hidden;
`;

const Frame = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75vh;
  height: 75vh;
  max-width: 500px;
  max-height: 500px;
  background: white;
  border-radius: 50%;
`;

const TextContainer = styled.div`
  margin-top: 10%;
  overflow: hidden;
`;

const Text = styled.h1`
  font-size: 6rem;
  text-transform: uppercase;
  width: 100%;
  color: #22a39f;
  position: relative;
  &::before {
    content: attr(data-content);
    position: absolute;
    z-index: 1;
    background-clip: text;
    -webkit-text-stroke: 1px #22a39f;
    -webkit-text-fill-color: transparent;
  }
`;

const HScroll = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  transition: all 1000ms ease-in-out;
`;

const ScrollIndicator = styled.span`
  color: rgba(255, 255, 255, 0.5);
  position: absolute;
  font-size: 1rem;
  bottom: 3vmin;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10000;
`;

const TopPage = () => {
  // ref를 생성하여 DOM 요소를 참조합니다.
  const hscrollLeftRef = useRef(null);
  const hscrollRightRef = useRef(null);

  useEffect(() => {
    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (hscrollLeftRef.current) {
        hscrollLeftRef.current.style.left = `${-0.5 * scrollTop}px`;
      }
      if (hscrollRightRef.current) {
        hscrollRightRef.current.style.left = `${0.5 * scrollTop}px`;
      }
    };

    // 스크롤 이벤트 리스너를 등록합니다.
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Container>
        <TextContainer>
          <HScroll ref={hscrollLeftRef}>
            <Text data-content="KIM JIYE">KIM JIYE</Text>
          </HScroll>
          <HScroll ref={hscrollRightRef}>
            <Text data-content="FRONT-END">FRONT-END</Text>
          </HScroll>
        </TextContainer>
        <Frame />
      </Container>
      <ScrollIndicator>Scroll down</ScrollIndicator>
    </>
  );
};

export default TopPage;
