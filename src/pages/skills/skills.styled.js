import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
  overflow: visible;
  position: relative;
  background: rgb(2, 7, 21);
  height: 120vh;
  font-family: Pretendard JP;
  @media only screen and (max-width: 480px) {
    display: block;
    height: 100%;
    padding-bottom: 6rem;
    width: 100%;
  }
`;

export const StackWrapper = styled.div`
  max-width: 900px;
  padding-top: 50px;
  @media only screen and (max-width: 480px) {
    max-width: 440px;
  }
`;
export const MainTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 0;
  color: #00adb5;
  font-weight: 900;
`;

export const IconComment = styled.p`
  color: #eeeeee;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export const FrontStack = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 150px;
  margin-top: 4rem;
`;

export const UsingTool = styled.div`
  display: flex;
`;

export const StackUl = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 35px;
  margin: 0;
  @media only screen and (max-width: 480px) {
    gap: 0;
    flex-direction: column;
    padding: 6px 12px;
  }
`;
export const StackImg = styled.li`
  position: relative;
  align-items: center;
  display: flex;
  width: 90px;
  height: 90px;
  background-color: #000000;
  border-radius: 0px;
  border: 1px solid rgb(30, 30, 35);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  overflow: hidden;
  transition: 300ms ease;
  justify-content: center;
  div {
    display: flex;
  }
  .show-box {
    position: absolute;
    width: 180px;
    left: 150px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    opacity: 0;
    transition: left 250ms ease, opacity 400ms ease;
    cursor: default;

    color: #eeeeee;
  }
  &:hover {
    padding-right: 180px;
    height: 120px;
    box-shadow: 0 0 20px;
    border-radius: 0.3rem;
    .show-box {
      opacity: 1;
      left: 90px;
    }
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
    overflow: visible;
    height: auto;
    padding: 15px 10px;
    .show-box {
      display: block;
      position: static;
      width: auto;
      opacity: 1;
      transition: none;
    }
    &:hover {
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
      border-radius: 0px;
    }
  }
`;

export const Pstyle = styled.p`
  padding: 0;
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  text-align: left;
  font-family: Pretendard JP;
  @media only screen and (max-width: 480px) {
    padding: 0 0 0 15px;
  }
`;

export const SpanStyle = styled.span`
  font-size: 0.8rem;
  padding-right: 15px;
  text-align: left;
  @media only screen and (max-width: 480px) {
    padding: 0 0 0 15px;
  }
`;
export const StackTitleBox = styled.div`
  display: flex;
  margin: 7.5rem 0 1.25rem 1.875rem;
  color: #eeeeee;
  @media only screen and (max-width: 480px) {
    margin: 3rem 0 1.25rem 1.875rem;
  }
`;

export const StackTitle = styled.span`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 1.5625rem;
  border: 1px solid rgb(50, 50, 60);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
  padding: 0.375rem 1.5625rem;
`;
