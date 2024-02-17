import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  0% {
    opacity: 0;
    transform: rotate(45deg) translate(-20px, -20px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(45deg) translate(20px, 20px);
  }
`;

export const Container = styled.section`
  height: 100vh;
  overflow: hidden;
`;

export const Frame = styled.div`
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

export const TextContainer = styled.div`
  margin-top: 12%;
  overflow: hidden;
`;

export const Text = styled.h1`
  font-size: 10rem;
  font-weight: 800;
  text-transform: uppercase;
  color: #22a39f;
  position: relative;
  display: inline-block;
  margin: 0;
  &.left {
    margin-left: -400px;
  }
  &.right {
    margin-right: -200px;
  }
  &::before {
    content: attr(data-content);
    position: absolute;
    z-index: 1;
    background-clip: text;
    -webkit-text-stroke: 1px #22a39f;
    -webkit-text-fill-color: transparent;
  }
`;

export const HScroll = styled.div`
  width: 100%;
  height: 50%;
  text-align: center;
  position: relative;
  transition: all 1000ms ease-in-out;
`;

export const ScrollIndicator = styled.span`
  color: rgba(255, 255, 255, 0.5);
  position: absolute;
  font-size: 1rem;
  bottom: 6rem;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 10000;
`;

export const ScrollArrow = styled.div`
  position: absolute;
  bottom: 60px;
  width: 100%;
  z-index: 10000;

  display: flex;
  justify-content: center;
`;

export const AnimatedSpan = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-bottom: 1px solid #fff;
  border-right: 1px solid #fff;
  transform: rotate(45deg);
  margin: -10px;
  animation: ${animate} 2s infinite;
  animation-delay: ${(props) => props.delay || '0s'};
`;
