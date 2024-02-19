import React, { useEffect, useState } from 'react';
import * as St from './workslide.styled';
import project from '../../api/project.json';
import Modal from './Modal';

export default function WorkSlide() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [projects, setProjects] = useState([]);
  const [mainImageIdx, setMainImageIdx] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

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

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <St.Container>
        <St.IconButton onClick={prevProject}>
          <St.ArrowBackIosNewIcon />
        </St.IconButton>
        <St.InnerContainer>
          {projects.length > 0 && (
            <St.ProjectContainer>
              <St.MainImageWrap onClick={handleImageClick}>
                <St.MainImage
                  src={projects[currentIdx].img[mainImageIdx]}
                  alt={`Project ${currentIdx} Main Image`}
                />
              </St.MainImageWrap>

              {isModalOpen && (
                <Modal onClose={() => setIsModalOpen(false)}>
                  <img
                    src={projects[currentIdx].img[mainImageIdx]}
                    alt="Modal Content"
                    style={{ width: '100%' }}
                  />
                </Modal>
              )}
              <St.ProjectWrapper>
                <St.ImageContentWrap>
                  {projects[currentIdx].img.map((image, imgIndex) => (
                    <St.PreviewImageWrapper key={imgIndex}>
                      <St.PreviewImage
                        src={image}
                        alt={`Project ${currentIdx} Image ${imgIndex}`}
                        onClick={() => changeMainImage(imgIndex)}
                      />
                    </St.PreviewImageWrapper>
                  ))}
                </St.ImageContentWrap>
                <St.TitleWrapper>
                  <St.Title>{projects[currentIdx].title}</St.Title>
                  <St.SubTitle>{projects[currentIdx].subtitle}</St.SubTitle>
                  <St.Info>
                    {projects[currentIdx].script
                      .split('\\n')
                      .map((line, index) => (
                        <St.Comment key={index}>{line}</St.Comment>
                      ))}
                    {projects[currentIdx].more && (
                      <>
                        <St.More onClick={toggleShowMore}>
                          {showMore ? 'Show Less' : 'Show More'}
                        </St.More>
                        {showMore && (
                          <St.ShowComment>
                            {projects[currentIdx].more}
                          </St.ShowComment>
                        )}
                      </>
                    )}
                  </St.Info>
                </St.TitleWrapper>
                <St.TagUl>
                  {projects[currentIdx].hash.map((tag, tagIndex) => (
                    <li key={tagIndex}>{tag}</li>
                  ))}
                </St.TagUl>
                <St.UrlUl>
                  <St.UrlWrapper>
                    {projects[currentIdx].siteUrl &&
                      projects[currentIdx].siteUrl.length > 0 && (
                        <St.SiteWrapper
                          href="{projects[currentIdx].siteUrl}"
                          target="_blank"
                        >
                          <St.Site>サイトへのアクセス</St.Site>
                        </St.SiteWrapper>
                      )}
                  </St.UrlWrapper>
                  <St.UrlWrapper>
                    <St.GithubWrapper
                      href="{projects[currentIdx].githubUrl}"
                      target="_blank"
                    >
                      <St.Github>GitHub</St.Github>
                    </St.GithubWrapper>
                  </St.UrlWrapper>
                </St.UrlUl>
              </St.ProjectWrapper>
            </St.ProjectContainer>
          )}
        </St.InnerContainer>

        <St.IconButton onClick={nextProject}>
          <St.ArrowForwardIosIcon />
        </St.IconButton>
      </St.Container>
      <St.IndicatorContainer>
        {projects.map((_, index) => (
          <St.Indicator
            key={index}
            isActive={index === currentIdx}
            onClick={() => setCurrentIdx(index)}
          />
        ))}
      </St.IndicatorContainer>
    </>
  );
}
