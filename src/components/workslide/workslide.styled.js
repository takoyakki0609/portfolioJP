import styled from '@emotion/styled';
import arrow from '../../assets/arrow_1.png';
import { keyframes } from '@emotion/react';
import go from '../../assets/go.png';
import githubIcon from '../../assets/github2.png';

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

export const Container = styled('section')({
  fontFamily: 'Pretendard JP',
  display: 'flex',
  width: '100%',
  overflow: 'hidden',
  justifyContent: 'space-evenly',
  alignItems: 'center',
});

export const InnerContainer = styled('div')({
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  background: 'rgb(2, 7, 21)',
  width: '600px',
  padding: '24px 36px',
  display: 'flex',

  alignItems: 'center',
});

export const ProjectContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});
export const ImageContentWrap = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  width: '100%',
  gap: '15px',
});
export const MainImageWrap = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '.625rem',
  transition: '300ms',
  cursor: 'pointer',
  ':hover': {
    filter: 'brightness(70%)',
  },
});
export const MainImage = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: '0.5rem',
  marginTop: '3.125rem',
});

export const PreviewImageWrapper = styled('div')({
  width: '22%',
  boxSizing: 'border-box',
});

export const PreviewImage = styled('img')({
  height: '5rem',
  objectFit: 'cover',
  cursor: 'pointer',
  boxSizing: 'border-box',
  padding: '.2rem',
  transition: '200ms ease',
  ':hover': {
    border: '2px solid #EEEEEE',
  },
});
export const ProjectWrapper = styled('div')({
  width: '100%',
});

export const TitleWrapper = styled('div')({
  marginTop: '1.5rem',
});

export const Title = styled('h2')({
  fontSize: '2rem',
  margin: '0',
  color: '#EEEEEE',
});
export const SubTitle = styled('h3')({
  fontSize: '1rem',
  margin: '0',
});
export const Comment = styled('span')({
  lineHeight: '1.2',
});

export const ShowComment = styled('div')({
  marginTop: '0.5rem',
  lineHeight: '1.2rem',
});

export const Info = styled('p')({
  color: '#EEEEEE',
});

export const IconButton = styled('div')({
  cursor: 'pointer',
});
export const ArrowBackIosNewIcon = styled('div')({
  width: '80px',
  height: '80px',
  backgroundImage: `url(${arrow})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  filter: 'invert(100%)',
  transform: 'rotate(90deg)',
  animation: `${leftMovingAnimation} 1500ms ease-in-out infinite`,
});
export const ArrowForwardIosIcon = styled('div')({
  width: '80px',
  height: '80px',
  backgroundImage: `url(${arrow})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  filter: 'invert(100%)',
  transform: 'rotate(-90deg)',
  animation: `${rightMovingAnimation} 1500ms ease-in-out infinite`,
});

export const TagUl = styled('ul')({
  listStyle: 'none',
  display: 'flex',
  gap: '15px',
  padding: '0',
  color: '#EEEEEE',
  '& li': {
    padding: '6px 12px',
    backgroundColor: 'rgba(55, 55, 67, 0.7)',
    borderRadius: '5px',
    transition: '200ms ease',
    ':hover': {
      transform: 'scale(1.1)',
    },
  },
});
export const UrlUl = styled('ul')({
  listStyle: 'none',
  display: 'flex',
  gap: '35px',
  padding: '0',
});

export const More = styled('button')({
  border: 'none',
  fontSize: '1rem',
  fontWeight: '600',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  color: '#FCE38A',
  transition: '600ms ease',
  ':hover': {
    textDecoration: 'underline',
  },
});

export const IndicatorContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  padding: '93px 0',
});

export const Indicator = styled('div')`
  margin: 0 5px;
  width: 10px;
  height: 10px;
  background-color: ${({ isActive }) => (isActive ? '#EEEEEE' : 'grey')};
  border-radius: 50%;
  cursor: pointer;
  ${({ isActive }) =>
    isActive && `filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.85));`}
`;

export const UrlWrapper = styled('div')({});
export const SiteWrapper = styled('a')({
  textDecoration: 'none',
});
export const GithubWrapper = styled('a')({
  textDecoration: 'none',
});
export const Site = styled('div')({
  position: 'relative',
  color: '#eeeeee',
  backgroundColor: '#00ADB5',
  fontWeight: '800',
  fontSize: '0.9rem',
  paddingLeft: '20px',
  paddingRight: '10px',
  height: '38px',
  lineHeight: '38px',
  transition: '150ms',
  boxShadow:
    'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',

  '&::before': {
    content: "''",
    position: 'absolute',
    width: '30px',
    height: '30px',
    top: '50%',
    background: `url(${go}) 50% 50% no-repeat`,
    backgroundSize: '12px 12px',
    filter: 'invert(100%)',
    zIndex: '999',
    transform: 'translateY(-50%)',
    left: '-1px',
    borderRadius: '1px',
  },
  ':hover': {
    backgroundColor: '#02d0db',
  },
});
export const Github = styled('div')({
  position: 'relative',
  color: '#222831',
  backgroundColor: '#eeeeee',
  fontWeight: '800',
  fontSize: '0.9rem',
  paddingLeft: '35px',
  paddingRight: '15px',
  height: '38px',
  lineHeight: '38px',
  transition: '300ms',
  borderRadius: '1px',
  boxShadow:
    'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',

  '&::before': {
    content: "''",
    position: 'absolute',
    width: '30px',
    height: '30px',
    top: '50%',
    background: `url(${githubIcon}) 50% 50% no-repeat`,
    backgroundSize: '22px 22px',
    zIndex: '999',
    transform: 'translateY(-50%)',
    left: '4px',
  },
  ':hover': {
    backgroundColor: 'rgb(155, 155, 155)',
  },
});
