import styled from '@emotion/styled';
import { Box } from '@mui/material';
import stack from '../api/skillstacks.json';
const FrontStack = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
});

const UsingTool = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
});

const StackImg = styled.li`
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

    color: white;
  }
  &:hover {
    padding-right: 180px;
    height: 160px;
    box-shadow: 0 0 20px wheat;
    border-radius: 25px;
    .show-box {
      opacity: 1;
      left: 90px;
    }
  }
`;

const Pstyle = styled('p')({
  padding: 0,
  margin: 0,
  fontSize: '17.6px',
});

const SpanStyle = styled('span')({
  fontSize: '12.8px',
  paddingRight: '15px',
  paddingTop: '5px',
});

const StackTitleBox = styled('div')({
  display: 'flex',
  margin: '80px 0 20px 30px',
  color: 'white',
});

const StackTitle = styled('span')({
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  borderRadius: '25px',
  border: '1px solid rgb(50, 50, 60)',
  boxShadow: '0 0 15px rgba(0, 0, 0, 0.7)',
  padding: '6px 25px',
});

export default function Skills() {
  return (
    <Box
      sx={{
        textAlign: 'center',
        backgroundColor: 'black',
        padding: '40px 0',
        marginTop: '80px',
      }}
    >
      <h2 style={{ fontSize: '48px', marginBottom: '0', color: '#22A39F' }}>
        TECH STACK
      </h2>
      <p style={{ color: 'white' }}>
        アイコンにマウスを置くと、詳細な説明が表示されます。
      </p>
      <StackTitleBox>
        <StackTitle># FRONT-END SKILL</StackTitle>
      </StackTitleBox>

      <FrontStack>
        {stack.front.map((front, idx) => {
          return (
            <div key={idx}>
              <ul>
                <StackImg>
                  <img
                    style={{ width: '50px' }}
                    src={front.src}
                    alt={front.title}
                  />
                  <div className="show-box">
                    <Pstyle>{front.title}</Pstyle>
                    <SpanStyle>{front.inner}</SpanStyle>
                  </div>
                </StackImg>
              </ul>
            </div>
          );
        })}
      </FrontStack>
      <StackTitleBox>
        <StackTitle># USING TOOL</StackTitle>
      </StackTitleBox>
      <UsingTool>
        {stack.tools.map((tool, idx) => {
          return (
            <div style={{ display: 'flex' }} key={idx}>
              <StackImg>
                <img
                  style={{ width: '50px' }}
                  src={tool.src}
                  alt={tool.title}
                />
                <div className="show-box">
                  <Pstyle>{tool.title}</Pstyle>
                  <SpanStyle>{tool.inner}</SpanStyle>
                </div>
              </StackImg>
            </div>
          );
        })}
      </UsingTool>
    </Box>
  );
}
