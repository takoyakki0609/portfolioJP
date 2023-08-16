import { Container } from "@mui/material";
import Gnb from "./components/Gnb";
import TopPage from "./pages/TopPage";
import About from "./pages/About";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Container>
          <Gnb/>
          <TopPage/>
          <About/>
          <Project/>
          <Skills/>
          <Contact/>
          <Footer/>
    </Container>
  );
}

