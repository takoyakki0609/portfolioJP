import React, { useEffect, useRef } from 'react';
import * as St from './toppage.styled';

const TopPage = () => {
  const hscrollLeftRef = useRef(null);
  const hscrollRightRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (hscrollLeftRef.current) {
        hscrollLeftRef.current.style.left = `${-3 * scrollTop}px`;
      }
      if (hscrollRightRef.current) {
        hscrollRightRef.current.style.left = `${3 * scrollTop}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);

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
