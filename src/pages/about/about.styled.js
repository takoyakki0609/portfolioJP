import bgImg from '../../assets/img_2.jpg';
import styled from 'styled-components';
import { textGradient } from '../../styles/animation';

export const Container = styled.div`
  font-family: Pretendard JP;
  font-weight: 700;
  height: 100vh;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  transition: 300ms ease;
  @media (min-width: 375px) and (max-width: 480px) {
    height: 100vh;
    display: block;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    display: block;
  }
`;

export const ImgBox = styled.div`
  width: 480px;
  height: 100vh;
  min-height: 600px;
  background-color: gray;
  position: absolute;
  background: url(${bgImg}) 22% 0% no-repeat;
  background-size: 900px auto;
  background-attachment: fixed;
  filter: brightness(80%);
  border-radius: 1rem;
  transition: 300ms ease;
  @media (min-width: 375px) and (max-width: 480px) {
    width: 100%;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    width: 100%;
  }
`;

export const TitleBox = styled.h2`
  margin-left: 200px;
  font-size: 3.2rem;
  line-height: 3.5rem;
  font-weight: 700;
  font-family: Pretendard JP;
  transition: 300ms ease;
  animation: ${textGradient} 8s linear infinite alternate;
  background: linear-gradient(
    90deg,
    rgb(208, 209, 142) 0%,
    rgb(255, 255, 255) 25%,
    rgb(167, 183, 255) 50%,
    rgb(255, 255, 255) 75%,
    rgb(252, 255, 49) 100%
  );
  background-size: 1000% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;

  & span {
    font-size: 4rem;
    font-weight: 900;
  }
  @media (min-width: 375px) and (max-width: 480px) {
    width: 100%;
    margin: 0;
    padding-left: 20px;
    font-size: 1.5rem;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    width: 100%;
    margin-left: 40px;
    padding-top: 20px;
  }
`;
export const IntroBox = styled.div`
  color: #eeeeee;
  position: absolute;
  right: -17rem;
  max-width: 580px;
  margin-top: 90px;
  transition: 300ms ease;
  @media (min-width: 375px) and (max-width: 480px) {
    right: 0;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    right: -6rem;
    margin-top: 40px;
  }
`;

export const TextWrapper = styled.div`
  position: relative;
`;
export const TitleWrapper = styled.div``;
export const TextBox = styled.div`
  width: 80%;
  margin-left: 70px;
  word-break: keep-all;
  line-height: 1.9rem;
  transition: 300ms ease;
  @media (min-width: 375px) and (max-width: 480px) {
    padding-left: 1.2rem;
    font-size: 0.7rem;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    padding-left: 1.3rem;
    font-size: 1rem;
  }
`;
export const PointTag = styled.p`
  font-size: 1.3rem;
  color: #00adb5;
  font-family: Pretendard JP;
  transition: 300ms ease;
  @media (min-width: 375px) and (max-width: 480px) {
    font-size: 1rem;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 1.4rem;
  }
`;

export const TagBox = styled.div``;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  @media (min-width: 481px) and (max-width: 767px) {
    justify-content: flex-start;
    gap: 20px;
  }
`;

export const Tag = styled.li`
  list-style: none;
  color: #00adb5;
  cursor: pointer;
  border-radius: 1rem;
  padding: 0;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
`;

export const TagDescription = styled.div`
  position: absolute;
  transition: opacity 0.3s ease;
  cursor: default;
  &:nth-of-type(3) {
    left: 10rem;
  }
  &:nth-of-type(4) {
    right: 3rem;
  }
  &:nth-of-type(5) {
    right: -4rem;
  }
  @media (min-width: 375px) and (max-width: 480px) {
    &:nth-of-type(1) {
      left: 2rem;
    }
    &:nth-of-type(2) {
      left: 2rem;
    }
    &:nth-of-type(3) {
      left: 3.5rem;
    }
    &:nth-of-type(4) {
      right: 2rem;
    }
    &:nth-of-type(5) {
      right: 1rem;
    }
  }
  @media (min-width: 481px) and (max-width: 767px) {
    &:nth-of-type(1) {
      left: 2rem;
    }
    &:nth-of-type(2) {
      left: 2rem;
    }
    &:nth-of-type(3) {
      left: 3rem;
    }
    &:nth-of-type(4) {
      right: 13rem;
    }
    &:nth-of-type(5) {
      right: 10rem;
    }
  }
`;
