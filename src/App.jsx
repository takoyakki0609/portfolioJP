import styled from '@emotion/styled';
import Router from './shared/Router';
export default function App() {
  return (
    <Container>
      <Router />
    </Container>
  );
}

const Container = styled('div')({});
