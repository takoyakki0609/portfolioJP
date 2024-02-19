import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
  overflow: visible;
  position: relative;
  background: rgb(2, 7, 21);
  height: 100vh;
  font-family: Pretendard JP;
  @media (min-width: 375px) and (max-width: 480px) {
    display: block;
    height: 100%;
    padding-bottom: 6rem;
    width: 100%;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    display: block;
    height: 100%;
    padding-bottom: 6rem;
    width: 100%;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    display: block;
    height: 100%;
    padding-bottom: 3rem;
    width: 100%;
  }
`;

export const StackWrapper = styled.div`
  max-width: 900px;
  padding-top: 50px;
  @media (min-width: 375px) and (max-width: 480px) {
    max-width: 440px;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    max-width: 700px;
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
  @media (min-width: 375px) and (max-width: 480px) {
    display: none;
  }
  @media (min-width: 481px) and (max-width: 767px) {
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
  gap: 20px 10px;
  width: 100%;
  margin: 0;
  @media (min-width: 375px) and (max-width: 480px) {
    gap: 0;
    flex-direction: column;
    padding: 6px 12px;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 6px 12px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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
    text-align: left;
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
      padding-right: initial;
      height: auto;
      border-radius: 0px;
    }
    .show-box {
      opacity: 1;
      left: initial;
      transition: none;
    }
  }
  @media (min-width: 481px) and (max-width: 767px) {
    box-sizing: border-box;
    text-align: left;
    width: 100%;
    overflow: visible;
    height: 9rem;
    padding: 10px;
    .show-box {
      display: block;
      position: static;
      width: auto;
      opacity: 1;
      transition: none;
      padding: 10px;
    }
    &:hover {
      padding-right: initial;
      height: 9rem;
      box-shadow: none;
      border-radius: 0px;
    }
    .show-box {
      opacity: 1;
      left: initial;
      transition: none;
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    box-sizing: border-box;
    text-align: left;
    width: 100%;
    overflow: visible;
    height: 8rem;
    padding: 10px;
    .show-box {
      display: block;
      position: static;
      width: auto;
      opacity: 1;
      transition: none;
      padding-left: 0.625rem;
    }
    &:hover {
      padding-right: initial;
      height: 8rem;
      border-radius: 0px;
    }
    .show-box {
      opacity: 1;
      left: initial;
      transition: none;
      display: flex;
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
  @media (min-width: 375px) and (max-width: 480px) {
    padding: 0 0 0 15px;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    padding: 0;
  }
`;

export const SpanStyle = styled.span`
  font-size: 0.8rem;
  padding-right: 15px;
  text-align: left;
  @media (min-width: 375px) and (max-width: 480px) {
    display: block;
    padding-left: 15px;
    font-size: 0.7rem;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    padding: 0;
  }
`;
export const StackTitleBox = styled.div`
  display: flex;
  margin: 7.5rem 0 1.25rem 1.875rem;
  color: #eeeeee;
  @media (min-width: 375px) and (max-width: 480px) {
    margin: 3rem 0 1.25rem 1.875rem;
  }
  @media (min-width: 481px) and (max-width: 767px) {
  }
`;

export const StackTitle = styled.span`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 1.5625rem;
  border: 1px solid rgb(50, 50, 60);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
  padding: 0.375rem 1.5625rem;
`;
