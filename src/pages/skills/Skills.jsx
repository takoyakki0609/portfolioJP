import * as St from './skills.styled';
import stack from '../../api/skillstacks.json';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Skills() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <St.Container>
      <St.StackWrapper>
        <div data-aos="fade-up">
          <St.MainTitle>TECH STACK</St.MainTitle>
          <St.IconComment>
            アイコンにマウスを置くと、詳細な説明が表示されます。
          </St.IconComment>
        </div>
        <div data-aos="zoom-out">
          <St.StackTitleBox>
            <St.StackTitle># FRONT-END SKILL</St.StackTitle>
          </St.StackTitleBox>
        </div>

        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
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
        </div>
        <div data-aos="zoom-out">
          <St.StackTitleBox>
            <St.StackTitle># USING TOOL</St.StackTitle>
          </St.StackTitleBox>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
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
        </div>
      </St.StackWrapper>
    </St.Container>
  );
}
