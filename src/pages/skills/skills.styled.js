import styled from '@emotion/styled';

export const Container = styled('section')({
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  boxSizing: 'border-box',
  overflow: 'visible',
  position: 'relative',
  background: 'rgb(2, 7, 21)',
  height: '120vh',
  fontFamily: 'Pretendard JP',
});
export const StackWrapper = styled('div')({
  maxWidth: '900px',
});

export const MainTitle = styled('h2')({
  fontSize: '3rem',
  marginBottom: '0',
  color: '#00ADB5',
  fontWeight: '900',
});

export const FrontStack = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  minHeight: '150px',
  marginTop: '4rem',
});

export const UsingTool = styled('div')({
  display: 'flex',
});

export const StackUl = styled('ul')({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '35px',
  margin: '0',
});

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
`;

export const Pstyle = styled('p')({
  padding: 0,
  margin: 0,
  fontSize: '1.1rem',
  fontWeight: '700',
  textAlign: 'left',
  fontFamily: 'Pretendard JP',
});

export const SpanStyle = styled('span')({
  fontSize: '0.8rem',
  paddingRight: '15px',
  textAlign: 'left',
});

export const StackTitleBox = styled('div')({
  display: 'flex',
  margin: '120px 0 20px 30px',
  color: '#EEEEEE',
});

export const StackTitle = styled('span')({
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  borderRadius: '25px',
  border: '1px solid rgb(50, 50, 60)',
  boxShadow: '0 0 15px rgba(0, 0, 0, 0.7)',
  padding: '6px 25px',
});
