import styled from '@emotion/styled';
import WorkSlide from '../components/workslide/WorkSlide';

const Container = styled('div')({
  width: '100%',
  color: '#22A39F',
  backgroundColor: '#0F0F0F',
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
