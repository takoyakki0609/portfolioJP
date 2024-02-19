import { keyframes } from '@emotion/react';
import bgImg from '../../assets/img_2.jpg';
import styled from '@emotion/styled';

export const textGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

export const Container = styled('div')({
  fontFamily: 'Pretendard JP',
  fontWeight: 700,
  height: '100vh',
  maxWidth: '1200px',
  display: 'flex',
  justifyContent: 'center',
});

export const ImgBox = styled('div')({
  width: '400px',
  height: '90%',
  minHeight: '600px',
  backgroundColor: 'gray',
  position: 'absolute',
  background: `url(${bgImg}) 22% 0% no-repeat`,
  backgroundSize: '900px auto',
  backgroundAttachment: 'fixed',
  filter: 'brightness(80%)',

  borderRadius: '1rem',
});

export const TitleBox = styled('h2')({
  marginLeft: '200px',
  fontSize: '3.2rem',
  lineHeight: '3.5rem',
  fontWeight: 700,
  fontFamily: 'Pretendard JP',

  animation: `${textGradient} 8s linear infinite alternate`,
  background:
    'linear-gradient(90deg, rgb(208, 209, 142) 0%, rgb(255, 255, 255) 25%, rgb(167, 183, 255) 50%, rgb(255, 255, 255) 75%, rgb(252, 255, 49) 100%)',
  backgroundSize: '1000% 100%',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  color: 'transparent',
  '& span': {
    fontSize: '4rem',
    fontWeight: 900,
  },
});
export const IntroBox = styled('div')({
  color: '#EEEEEE',
  position: 'absolute',
  right: '-17rem',
  maxWidth: '580px',
  marginTop: '90px',
});

export const TextWrapper = styled('div')({
  position: 'relative',
});
export const TitleWrapper = styled('div')({});
export const TextBox = styled('div')({
  wordBreak: 'keep-all',
  lineHeight: '1.9rem',
});
export const PointTag = styled('p')({
  fontSize: '1.3rem',
  color: '#00ADB5',
  fontFamily: 'Pretendard JP',
});
export const TagBox = styled('div')({});
export const TagList = styled('ul')({
  display: 'flex',
  justifyContent: 'space-around',
});
export const Tag = styled('li')({
  listStyle: 'none',
  color: '#00ADB5',
  cursor: 'pointer',
  borderRadius: '1rem',
  paddin: 0,
});

export const DescriptionWrapper = styled('div')({
  display: 'flex',
  position: 'relative',
  cursor: 'pointer',
});
export const TagDescription = styled('div')({
  position: 'absolute',
  transition: 'opacity 0.3s ease',
  cursor: 'default',

  '&:nth-of-type(3)': {
    position: 'absolute',
    left: '10rem',
  },
  '&:nth-of-type(4)': {
    position: 'absolute',
    right: '3rem',
  },
  '&:nth-of-type(5)': {
    position: 'absolute',
    right: '-4rem',
  },
});
