import React, { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import * as St from './workslide.styled';
import project from '../../api/project.json';

export default function WorkSlide() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [projects, setProjects] = useState([]);
  const [mainImageIdx, setMainImageIdx] = useState(0);

  useEffect(() => {
    setProjects(Object.values(project));
  }, []);

  const changeMainImage = (index) => {
    setMainImageIdx(index);
  };

  const prevProject = () => {
    setCurrentIdx((prevIdx) =>
      prevIdx > 0 ? prevIdx - 1 : projects.length - 1,
    );
    setMainImageIdx(0);
  };

  const nextProject = () => {
    setCurrentIdx((prevIdx) =>
      prevIdx < projects.length - 1 ? prevIdx + 1 : 0,
    );
    setMainImageIdx(0);
  };

  return (
    <St.Container>
      <IconButton onClick={prevProject}>
        <ArrowBackIosNewIcon fontSize="large" />
      </IconButton>

      {projects.length > 0 && (
        <St.ProjectContainer>
          <St.MainImageWrap>
            <St.MainImage
              src={projects[currentIdx].img[mainImageIdx]}
              alt={`Project ${currentIdx} Main Image`}
            />
          </St.MainImageWrap>
          <St.ProjectWrapper>
            <St.ImageContentWrap>
              {projects[currentIdx].img.map((image, imgIndex) => (
                <St.PreviewImage
                  key={imgIndex}
                  src={image}
                  alt={`Project ${currentIdx} Image ${imgIndex}`}
                  onClick={() => changeMainImage(imgIndex)}
                />
              ))}
            </St.ImageContentWrap>
            <h2>{projects[currentIdx].title}</h2>
            <h3>{projects[currentIdx].subtitle}</h3>
            <p>{projects[currentIdx].script}</p>
            <ul>
              {projects[currentIdx].hash.map((tag, tagIndex) => (
                <li key={tagIndex}>{tag}</li>
              ))}
            </ul>
            <ul>
              {projects[currentIdx].socialurl.map((url, urlIndex) => (
                <li key={urlIndex}>
                  <a href={url}>{url}</a>
                </li>
              ))}
            </ul>
          </St.ProjectWrapper>
        </St.ProjectContainer>
      )}

      <IconButton onClick={nextProject}>
        <ArrowForwardIosIcon fontSize="large" />
      </IconButton>
    </St.Container>
  );
}
