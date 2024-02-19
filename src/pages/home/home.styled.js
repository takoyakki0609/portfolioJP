import styled from '@emotion/styled';

export const Navigator = styled.div`
  font-family: Pretendard JP;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: flex-end;
  gap: 20;
  padding: 20px;
  z-index: 99999;
  @media (min-width: 375px) and (max-width: 767px) {
    display: none;
  }
`;

export const NaviCategory = styled('button')({
  border: 'none',
  backgroundColor: 'transparent',
  color: '#eeeeee',
  cursor: 'pointer',
});
