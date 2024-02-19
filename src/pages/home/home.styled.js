import styled from '@emotion/styled';

export const Navigator = styled('div')({
  fontFamily: 'Pretendard JP',
  position: 'sticky',
  top: '0',
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '20px',
  padding: '20px',
  zIndex: '999999',
});

export const NaviCategory = styled('button')({
  border: 'none',
  backgroundColor: 'transparent',
  color: '#eeeeee',
  cursor: 'pointer',
});
