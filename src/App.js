import './App.css';
import styled from "styled-components";
import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home.jsx"
import Projects from "./components/Projects.jsx"
import Footer from "./components/Footer.jsx"

const Container = styled.div`
`

function App() {
  return (<Container>
    <Navbar />
    <Home />
    <Projects />
    <Footer />
    </Container>
  );
}

export default App;
