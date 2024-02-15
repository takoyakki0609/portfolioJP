import styled from '@emotion/styled';
import { Box } from '@mui/material';
import WorkSlide from '../components/WorkSlide';

const Container = styled('div')({
  color: '#22A39F',
});

export default function Project() {
  return (
    <Container>
      <h2 style={{ fontSize: '48px', textAlign: 'center', marginTop: '100px' }}>
        PROJECT
      </h2>
      <WorkSlide />
    </Container>
  );
}
