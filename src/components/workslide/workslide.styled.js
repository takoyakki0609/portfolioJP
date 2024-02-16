import styled from '@emotion/styled';

export const Container = styled('section')({
  display: 'flex',
  width: '100%',
  overflow: 'hidden',
});
export const ProjectContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});
export const ImageContentWrap = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
});
export const MainImageWrap = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '.625rem',
});
export const MainImage = styled('img')({
  width: '60%',
  height: 'auto',
  borderRadius: '1.875rem',
  marginTop: '3.125rem',
});
export const PreviewImage = styled('img')({
  width: '5rem',
  height: '5rem',
  objectFit: 'cover',
  marginRight: '.625rem',
  cursor: 'pointer',
});
export const ProjectWrapper = styled('div')({
  width: '100%',
});
