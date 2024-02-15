import styled from '@emotion/styled';
import about from '../api/about.json';
import { useEffect, useState } from 'react';
import { keyframes } from '@emotion/react';
import bgImg from '../assets/img_2.jpg';

const textGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

const Container = styled('div')({
  fontFamily: 'Apple SD Gothic Neo, sans-serif',
  fontWeight: 700,
  height: '100vh',
});

const ImgBox = styled('div')({
  width: '400px',
  height: '90%',
  minHeight: '600px',
  backgroundColor: 'gray',
  position: 'absolute',
  background: `url(${bgImg}) 22% 0% no-repeat`,
  backgroundSize: '900px auto',
  backgroundAttachment: 'fixed',
  filter: 'brightness(80%)',

  borderRadius: '1rem',
});

const TitleBox = styled('h2')({
  marginLeft: '200px',
  fontSize: '3.2rem',
  lineHeight: '3.5rem',
  fontWeight: 700,

  animation: `${textGradient} 8s linear infinite alternate`,
  background:
    'linear-gradient(90deg, rgb(208, 209, 142) 0%, rgb(255, 255, 255) 25%, rgb(167, 183, 255) 50%, rgb(255, 255, 255) 75%, rgb(252, 255, 49) 100%)',
  backgroundSize: '1000% 100%',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  color: 'transparent',
  '& span': {
    fontSize: '4rem',
    fontWeight: 900,
  },
});
const IntroBox = styled('div')({
  color: 'white',
  maxWidth: '580px',
  marginTop: '90px',
  marginLeft: 'auto',
  marginRight: '100px',
});

const TextWrapper = styled('div')({
  position: 'relative',
});
const TitleWrapper = styled('div')({});
const TextBox = styled('div')({
  wordBreak: 'keep-all',
  lineHeight: '1.9rem',
});
const PointTag = styled('p')({
  fontSize: '1.3rem',
  color: '#22A39F',
});
const TagBox = styled('div')({});
const TagList = styled('ul')({
  display: 'flex',
  justifyContent: 'space-around',
});
const Tag = styled('li')({
  listStyle: 'none',
  color: 'white',
  cursor: 'pointer',
  borderRadius: '1rem',
  paddin: 0,
});

const DescriptionWrapper = styled('div')({
  display: 'flex',
  position: 'relative',
  cursor: 'pointer',
});
const TagDescription = styled('div')({
  position: 'absolute',
  transition: 'opacity 0.3s ease',

  '&:nth-child(3)': {
    position: 'absolute',
    left: '10rem',
  },
  '&:nth-child(4)': {
    position: 'absolute',
    right: '3rem',
  },
  '&:nth-child(5)': {
    position: 'absolute',
    right: '-4rem',
  },
});

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
    <Container>
      <ImgBox></ImgBox>
      <TextWrapper>
        <TitleWrapper>
          <TitleBox>
            I’M GETTING READY FOR
            <br />
            <span>NEW START.</span>
          </TitleBox>
        </TitleWrapper>

        <IntroBox>
          <TextBox>
            こんにちは。執拗にフロントエンド開発者を夢見るキムジエです。
            <PointTag>" 執拗だ:［形容詞］非常に頑固でしつこい。」</PointTag>
            解決できないことが起きたら、何とか解決するために問題を分析し、他人に助言を求め、探求して解決する過程が好きです。
            新人として常に学ぶ姿勢を持ち、キャリアを積む準備ができています！
            <br />
            常に新しい試みを恐れないフロントエンドの開発者になります。
          </TextBox>
          <TagBox>
            <TagList>
              {tags.map((item, index) => {
                return (
                  <Tag
                    key={item.id}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.title}
                  </Tag>
                );
              })}
            </TagList>
          </TagBox>
          <DescriptionWrapper>
            {description.map((item, index) => {
              return (
                <TagDescription
                  key={item.id}
                  style={{ opacity: activeTagIndex === index ? 1 : 0 }}
                >
                  {item.text}
                </TagDescription>
              );
            })}
          </DescriptionWrapper>
        </IntroBox>
      </TextWrapper>
    </Container>
  );
}
