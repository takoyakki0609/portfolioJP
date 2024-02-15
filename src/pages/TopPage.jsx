import styled from '@emotion/styled';
import { Box } from '@mui/material';

const TitleBox = styled('div')({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  fontSize: '48px',

  color: '#22A39F',
});

export default function TopPage() {
  return (
    <Box>
      <Box sx={{ height: '100vh' }}>
        <TitleBox>
          <h1 style={{ margin: 0 }}>FRONT-END DEV</h1>
          <span>PORTFOLIO</span>
        </TitleBox>
      </Box>
    </Box>
  );
}
