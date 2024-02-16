import * as St from './about.styled';
import about from '../../api/about.json';
import { useEffect, useState } from 'react';

export default function About() {
  const [tags, setTags] = useState([]);
  const [description, setDescription] = useState([]);
  const [activeTagIndex, setActiveTagIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveTagIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveTagIndex(null);
  };

  useEffect(() => {
    setTags(about.tags);
    setDescription(about.TagDescription);
  }, []);

  return (
    <St.Container>
      <div>
        <St.ImgBox></St.ImgBox>
        <St.TextWrapper>
          <St.TitleWrapper>
            <St.TitleBox>
              I’M GETTING READY FOR
              <br />
              <span>NEW START.</span>
            </St.TitleBox>
          </St.TitleWrapper>

          <St.IntroBox>
            <St.TextBox>
              こんにちは。執拗にフロントエンド開発者を夢見るキムジエです。
              <St.PointTag>
                " 執拗だ:［形容詞］非常に頑固でしつこい。」
              </St.PointTag>
              解決できないことが起きたら、何とか解決するために問題を分析し、他人に助言を求め、探求して解決する過程が好きです。
              新人として常に学ぶ姿勢を持ち、キャリアを積む準備ができています！
              <br />
              常に新しい試みを恐れないフロントエンドの開発者になります。
            </St.TextBox>
            <St.TagBox>
              <St.TagList>
                {tags.map((item, index) => {
                  return (
                    <St.Tag
                      key={item.id}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.title}
                    </St.Tag>
                  );
                })}
              </St.TagList>
            </St.TagBox>
            <St.DescriptionWrapper>
              {description.map((item, index) => {
                return (
                  <St.TagDescription
                    key={item.id}
                    style={{ opacity: activeTagIndex === index ? 1 : 0 }}
                  >
                    {item.text}
                  </St.TagDescription>
                );
              })}
            </St.DescriptionWrapper>
          </St.IntroBox>
        </St.TextWrapper>
      </div>
    </St.Container>
  );
}
