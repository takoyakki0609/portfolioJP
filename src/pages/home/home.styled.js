import styled from '@emotion/styled';

export const Navigator = styled.div`
  font-family: Pretendard JP;
  width: 98%;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  gap: 20;
  padding: 20px;
  z-index: 99999;
  @media (min-width: 375px) and (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 96%;
  }
`;
export const NaviCategory = styled.button`
  position: relative;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: inline-block;
  border-radius: 0;
  color: #eeeeee;
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
    background-color: #eeeeee;

    &:before {
      transition: width 0.4s ease;
      left: 0;
      right: 0;
      bottom: 0px;
    }

    &:after {
      right: 2.2%;
      bottom: 15px;
      transition: width 0.4s ease;
    }

    &:hover:before,
    &:hover:after {
      width: 97.8%;
    }
  }
`;
