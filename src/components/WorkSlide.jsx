import { Box, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import styled from '@emotion/styled';
import project from '../api/project.json';

const ProjectSlide = styled('div')({
  width: '600px',
  backgroundColor: 'gray',
});
const ImgWrap = styled('div')({});

const InfoWrap = styled('div')({
  marginTop: '20px',
});

const InfoTitle = styled('div')({});

const InfoMain = styled('div')({
  marginTop: '20px',
});

const TagBox = styled('ul')({
  marginTop: '30px',
  listStyle: 'none',
  display: 'flex',
});

const TagList = styled('li')({
  marginRight: '10px',
  padding: '6px 15px',
  color: 'white',
  backgroundColor: 'rgba(55, 55, 67, 0.7)',
  borderRadius: '7px',
});

const ButtonWrap = styled('div')({
  display: 'flex',
});

const IndicatorBox = styled('div')({});
export default function WorkSlide() {
  const [currentIdx, setCurrentIdx] = useState(1);
  const [projectOne, setProjectOne] = useState([]);
  console.log(projectOne);
  const setProject = () => {
    setProjectOne(project.project1);
  };

  useEffect(() => {
    setProject();
  }, []);

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <IconButton>
          <ArrowBackIosNewIcon fontSize="large" />
        </IconButton>
        <ProjectSlide>
          <ImgWrap>이미지 감싸는 컨테이너</ImgWrap>
          <InfoWrap>
            <InfoTitle>
              <h3 style={{ margin: 0 }}>프로젝트 이름 </h3>
              <span>팀 프로젝트 </span>
            </InfoTitle>
            <InfoMain>어떤 툴을 이용하여 개발했는지 작성</InfoMain>
            <TagBox>
              <TagList></TagList>
            </TagBox>
            <ButtonWrap></ButtonWrap>
          </InfoWrap>
        </ProjectSlide>
        <IconButton>
          <ArrowForwardIosIcon fontSize="large" />
        </IconButton>
        <IndicatorBox></IndicatorBox>
      </Box>
    </Box>
  );
}
