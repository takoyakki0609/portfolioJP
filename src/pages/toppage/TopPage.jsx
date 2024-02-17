import React, { useEffect, useRef } from 'react';
import * as St from './toppage.styled';

const TopPage = () => {
  // ref를 생성하여 DOM 요소를 참조합니다.
  const hscrollLeftRef = useRef(null);
  const hscrollRightRef = useRef(null);

  useEffect(() => {
    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (hscrollLeftRef.current) {
        hscrollLeftRef.current.style.left = `${-1.5 * scrollTop}px`;
      }
      if (hscrollRightRef.current) {
        hscrollRightRef.current.style.left = `${1.5 * scrollTop}px`;
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
      <St.Container>
        <St.TextContainer>
          <St.HScroll ref={hscrollLeftRef}>
            <St.Text className="left" data-content="KIM JIYE">
              KIM JIYE
            </St.Text>
          </St.HScroll>
          <St.HScroll ref={hscrollRightRef}>
            <St.Text className="right" data-content="FRONT-END.">
              FRONT-END.
            </St.Text>
          </St.HScroll>
        </St.TextContainer>
        <St.Frame />
      </St.Container>
      <St.ScrollIndicator>Scroll down</St.ScrollIndicator>
      <St.ScrollArrow>
        <St.AnimatedSpan delay="0s"></St.AnimatedSpan>
        <St.AnimatedSpan delay="-0.2s"></St.AnimatedSpan>
        <St.AnimatedSpan delay="-0.4s"></St.AnimatedSpan>
      </St.ScrollArrow>
    </>
  );
};

export default TopPage;
