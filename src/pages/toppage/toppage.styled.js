import styled from 'styled-components';
import { animate } from '../../styles/animation';

export const Container = styled.section`
  width: 100%;
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
  background: #eeeeee;
  border-radius: 50%;

  transition: 300ms ease;
  @media (min-width: 375px) and (max-width: 480px) {
    width: 25vh;
    height: 25vh;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    width: 40vh;
    height: 40vh;
  }
`;

export const TextContainer = styled.div`
  overflow: hidden;
`;

export const ScrollWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Text = styled.h1`
  font-family: Montserrat;
  font-size: 10rem;
  font-weight: 800;
  text-transform: uppercase;
  color: #00adb5;
  position: relative;
  display: inline-block;
  margin: 0;

  transition: 300ms ease;
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
    -webkit-text-stroke: 1px #00adb5;
    -webkit-text-fill-color: transparent;
  }
  @media (min-width: 375px) and (max-width: 480px) {
    font-size: 2.5rem;
    &.left {
      margin-left: -130px;
    }
    &.right {
      margin-right: -70px;
    }
    &::before {
      content: attr(data-content);
      position: absolute;
      z-index: 1;
      background-clip: text;
      -webkit-text-stroke: 1px #00adb5;
      -webkit-text-fill-color: transparent;
    }
  }
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 4rem;
    &.left {
      margin-left: -230px;
    }
    &.right {
      margin-right: -130px;
    }
    &::before {
      content: attr(data-content);
      position: absolute;
      z-index: 1;
      background-clip: text;
      -webkit-text-stroke: 1px #00adb5;
      -webkit-text-fill-color: transparent;
    }
  }
`;

export const HScroll = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  transition: all 1000ms ease-in-out;
`;

export const ScrollIndicator = styled.span`
  font-family: Pretendard JP;
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
