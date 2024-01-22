import { Box } from '@mui/material';
import navData from '../../../api/GnbData.json';
import styled from '@emotion/styled';

const LogoBox = styled('div')({});

const Navi = styled('div')({
  display: 'flex',
  listStyle: 'none',
  textTransform: 'uppercase',
});

export default function Gnb() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '30px',
        position: 'sticky',
        top: '20px',
      }}
    >
      <LogoBox>로고</LogoBox>
      <Navi>
        {Object.keys(navData).map((value, idx) => {
          return (
            <li style={{ marginRight: '15px', cursor: 'pointer' }} key={idx}>
              {navData[value].title}
            </li>
          );
        })}
      </Navi>
    </Box>
  );
}
