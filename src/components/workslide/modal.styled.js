import styled from '@emotion/styled';

export const Container = styled('section')({
  position: 'absolute',
  top: '-10%',
  bottom: '0',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: '1000',

  width: '850px',
  height: '600px',
  boxShadow:
    'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
});

export const Modal = styled('div')({
  background: 'white',
  padding: '2rem',
  borderRadius: '5px',
  position: 'relative',
});

export const ModalButton = styled.a`
  position: absolute;
  top: 0;
  right: 10px;
  cursor: pointer;
  display: inline-block;
  padding: 1em 0;
  border-radius: 0;
  color: rgb(2, 7, 21);
  font-weight: bold;
  font-size: 0.678rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    height: 1px;
    width: 0;
  }

  &:before {
    transition: width 0s ease, background 0.4s ease;
    left: 0;
    right: 0;
    bottom: 6px;
  }

  &:after {
    right: 2.2%;
    bottom: 6px;
    background: rgb(2, 7, 21);
    transition: width 0.4s ease;
  }

  &:hover:before {
    width: 97.8%;
    background: rgb(2, 7, 21);
    transition: width 0.4s ease;
  }

  &:hover:after {
    width: 97.8%;
    background: 0 0;
    transition: all 0s ease;
  }
`;
