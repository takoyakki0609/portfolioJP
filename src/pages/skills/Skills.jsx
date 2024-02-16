import * as St from './skills.styled';
import stack from '../../api/skillstacks.json';

export default function Skills() {
  return (
    <St.Container>
      <St.StackWrapper>
        <h2 style={{ fontSize: '48px', marginBottom: '0', color: '#22A39F' }}>
          TECH STACK
        </h2>
        <p style={{ color: 'white' }}>
          アイコンにマウスを置くと、詳細な説明が表示されます。
        </p>
        <St.StackTitleBox>
          <St.StackTitle># FRONT-END SKILL</St.StackTitle>
        </St.StackTitleBox>
        <St.FrontStack>
          <St.StackUl>
            {stack.front.map((front, idx) => {
              return (
                <St.StackImg key={idx}>
                  <img
                    style={{ width: '50px' }}
                    src={front.src}
                    alt={front.title}
                  />
                  <div className="show-box">
                    <St.Pstyle>{front.title}</St.Pstyle>
                    <St.SpanStyle>{front.inner}</St.SpanStyle>
                  </div>
                </St.StackImg>
              );
            })}
          </St.StackUl>
        </St.FrontStack>
        <St.StackTitleBox>
          <St.StackTitle># USING TOOL</St.StackTitle>
        </St.StackTitleBox>
        <St.FrontStack>
          <St.UsingTool>
            <St.StackUl>
              {stack.tools.map((tool, idx) => {
                return (
                  <St.StackImg key={idx}>
                    <img
                      style={{ width: '50px' }}
                      src={tool.src}
                      alt={tool.title}
                    />
                    <div className="show-box">
                      <St.Pstyle>{tool.title}</St.Pstyle>
                      <St.SpanStyle>{tool.inner}</St.SpanStyle>
                    </div>
                  </St.StackImg>
                );
              })}
            </St.StackUl>
          </St.UsingTool>
        </St.FrontStack>
      </St.StackWrapper>
    </St.Container>
  );
}
