import styled from '@emotion/styled';
import github from '../../assets/git.png';
import gmail from '../../assets/gmail.webp';

export const Container = styled('section')({
  display: 'flex',
  fontFamily: 'Pretendard JP',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '30vh',
  width: '100%',
  background: 'rgb(2, 7, 21)',
});

export const ContactBox = styled('ul')({
  color: '#EEEEEE',
  padding: '1rem 0',
});

export const ContactList = styled('li')({
  margin: '0.5rem 0',
  boxSizing: 'border-box',
});

export const ContactWrapper = styled('div')({});
export const Title = styled('h2')({
  textAlign: 'center',
  fontSize: '2rem',
  color: '#eeeeee',
});

export const IconWrapper = styled('ul')({
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'center',
  padding: '0',
  gap: '15px',
});
export const GithubIcon = styled('div')({
  background: `url(${github})`,
  width: '50px',
  height: '50px',
  backgroundSize: 'contain',
  transition: '200ms ease',
  ':hover': {
    transform: 'scale(1.1)',
  },
});

export const GmailIcon = styled('div')({
  background: `url(${gmail})`,
  width: '53px',
  height: '53px',
  backgroundSize: 'contain',
  transition: '200ms ease',
  ':hover': {
    transform: 'scale(1.1)',
  },
});
export const GmailIconWrapper = styled('li')({});
export const GithubIconWrapper = styled('li')({});
export const Linked = styled('a')({
  textDecoration: 'none',
  cursor: 'pointer',
  color: '#eeeeee',
  transition: '400ms ease',
  ':hover': {
    color: '#FCE38A',
  },
});
