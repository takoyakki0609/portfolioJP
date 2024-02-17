import styled from '@emotion/styled';
import WorkSlide from '../components/workslide/WorkSlide';

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  color: '#22A39F',
  backgroundColor:
    'linear-gradient(rgb(27, 29, 33) 0%, rgb(24, 25, 31) 33%, rgb(18, 18, 21) 70%, rgb(29, 31, 36) 100%)',
});

export default function Project() {
  return (
    <Container>
      <div style={{ width: '1200px' }}>
        <h2
          style={{ fontSize: '48px', textAlign: 'center', marginTop: '100px' }}
        >
          PROJECT
        </h2>
        <WorkSlide />
      </div>
    </Container>
  );
}
