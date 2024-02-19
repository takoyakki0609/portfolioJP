import styled from '@emotion/styled';
import arrow from '../../assets/arrow_1.png';
import go from '../../assets/go.png';
import githubIcon from '../../assets/github2.png';
import { keyframes } from '@emotion/react';

const leftMovingAnimation = keyframes`
0% {
  transform: rotate(90deg) translateY(0px);
}

50% {
  transform: rotate(90deg) translateY(20px);
}
100% {
  transform: rotate(90deg) translateY(0px);
}
`;

const rightMovingAnimation = keyframes`
0% {
  transform: rotate(-90deg) translateY(0px);
}

50% {
  transform: rotate(-90deg) translateY(20px);
}
100% {
  transform: rotate(-90deg) translateY(0px);
}
`;

export const Container = styled.section`
  font-family: Pretendard JP;
  display: flex;
  width: 100%;
  overflow: hidden;
  justify-content: space-evenly;
  align-items: center;
`;

export const InnerContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: rgb(2, 7, 21);
  width: 600px;
  padding: 1.5rem 2.3rem;
  display: flex;
  align-items: center;
  transition: 300ms ease;
  @media (min-width: 375px) and (max-width: 480px) {
    width: 370px;
    background-color: transparent;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    width: 100%;
    background-color: transparent;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ImageContentWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  @media (min-width: 375px) and (max-width: 480px) {
    box-sizing: border-box;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    box-sizing: border-box;
  }
`;
export const MainImageWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 0.625rem;
  transition: 300ms;
  cursor: pointer;
  &:hover {
    filter: brightness(70%);
  }
`;
export const MainImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  margin-top: 3.125rem;
`;

export const PreviewImageWrapper = styled.div`
  width: 22%;
  box-sizing: border-box;
  transition: 300ms ease;
  @media (min-width: 375px) and (max-width: 480px) {
    display: none;
  }
  @media (min-width: 481px) and (max-width: 767px) {
  }
`;

export const PreviewImage = styled.img`
  height: 5rem;
  object-fit: cover;
  cursor: pointer;
  box-sizing: border-box;
  padding: 0.2rem;
  transition: 200ms ease;
  &:hover {
    border: 2px solid #eeeeee;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    width: 100%;
  }
`;
export const ProjectWrapper = styled.div`
  width: 100%;
`;

export const TitleWrapper = styled.div`
  margin-top: 1.5rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin: 0;
  color: #eeeeee;
`;

export const SubTitle = styled.h3`
  font-size: 1rem;
  margin: 0;
`;

export const Comment = styled.span`
  line-height: 1.2;
`;

export const ShowComment = styled.div`
  margin-top: 0.5rem;
  line-height: 1.2;
`;

export const Info = styled.p`
  color: #eeeeee;
`;

export const IconButton = styled.div`
  cursor: pointer;
  @media (min-width: 375px) and (max-width: 480px) {
    position: absolute;
    bottom: -0.5rem;
  }
`;
export const ArrowBackIosNewIcon = styled.div`
  position: relative;
  z-index: 999;
  width: 80px;
  height: 80px;
  background-image: url(${arrow});
  background-size: cover;
  background-position: center;
  filter: invert(100%);
  transform: rotate(90deg);
  animation: ${leftMovingAnimation} 1500ms ease-in-out infinite;
  transition: 300ms ease;
  @media (min-width: 375px) and (max-width: 480px) {
    margin-right: 12rem;
    width: 50px;
    height: 50px;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    width: 60px;
    height: 60px;
  }
`;

export const ArrowForwardIosIcon = styled.div`
  width: 80px;
  height: 80px;
  background-image: url(${arrow});
  background-size: cover;
  background-position: center;
  filter: invert(100%);
  transform: rotate(-90deg);
  animation: ${rightMovingAnimation} 1500ms ease-in-out infinite;
  @media (min-width: 375px) and (max-width: 480px) {
    margin-left: 12rem;
    width: 50px;
    height: 50px;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    width: 60px;
    height: 60px;
  }
`;

export const TagUl = styled.ul`
  list-style: none;
  display: flex;
  gap: 15px;
  padding: 0;
  color: #eeeeee;
  font-size: 12px;
  & li {
    padding: 0.4rem 0.8rem;
    background-color: rgba(55, 55, 67, 0.7);
    border-radius: 5px;
    transition: 200ms ease;
    &:hover {
      transform: scale(1.1);
    }
  }
  @media (min-width: 375px) and (max-width: 480px) {
    font-size: 8px;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 8.6px;
  }
`;
export const UrlUl = styled.ul`
  list-style: none;
  display: flex;
  gap: 35px;
  padding: 0;
`;
export const More = styled.button`
  border: none;
  font-size: 1rem;
  font-weight: 600;
  background: transparent;
  cursor: pointer;
  color: #fce38a;
  transition: 600ms ease;
  &:hover {
    text-decoration: underline;
  }
`;

export const IndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5.8125rem 0;
  transition: 300ms ease;
  @media (min-width: 375px) and (max-width: 480px) {
    padding: 0.6rem 0;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    padding: 2rem 0;
  }
`;
export const Indicator = styled.div`
  margin: 0 5px; // 각 Indicator 간의 가로 마진
  width: 10px;
  height: 10px;
  background-color: ${({ isActive }) => (isActive ? '#EEEEEE' : 'grey')};
  border-radius: 50%;
  cursor: pointer;
  ${({ isActive }) =>
    isActive && `filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.85));`}
`;

export const UrlWrapper = styled.div``;
export const SiteWrapper = styled.a`
  text-decoration: none;
`;
export const GithubWrapper = styled.a`
  text-decoration: none;
`;

export const Site = styled.div`
  position: relative;
  color: #eeeeee;
  background-color: #00adb5;
  font-weight: 800;
  font-size: 0.9rem;
  padding-left: 20px;
  padding-right: 10px;
  height: 38px;
  line-height: 38px;
  transition: 150ms;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;

  &::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    top: 50%;
    background: url(${go}) 50% 50% no-repeat;
    background-size: 12px 12px;
    filter: invert(100%);
    z-index: 999;
    transform: translateY(-50%);
    left: -1px;
    border-radius: 1px;
  }

  &:hover {
    background-color: #02d0db;
  }
`;

export const Github = styled.div`
  position: relative;
  color: #222831;
  background-color: #eeeeee;
  font-weight: 800;
  font-size: 0.9rem;
  padding-left: 35px;
  padding-right: 15px;
  height: 38px;
  line-height: 38px;
  transition: 300ms;
  border-radius: 1px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;

  &::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    top: 50%;
    background: url(${githubIcon}) 50% 50% no-repeat;
    background-size: 22px 22px;
    z-index: 999;
    transform: translateY(-50%);
    left: 4px;
  }

  &:hover {
    background-color: rgb(155, 155, 155);
  }
`;
