import styled from '@emotion/styled';

export const Container = styled.section`
  position: absolute;
  top: -10%;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  width: 850px;
  height: 600px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  transition: 300ms ease;
  @media (min-width: 375px) and (max-width: 480px) {
    top: -5%;
    width: 350px;
    height: 200px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    top: 0;
    width: 500px;
    height: 300px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 700px;
    height: 500px;
  }
`;

export const Modal = styled.div`
  background-color: #eeeeee;
  padding: 2rem;
  border-radius: 5px;
  position: relative;
`;
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
