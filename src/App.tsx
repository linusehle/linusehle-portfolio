import Navbar from "./components/Navbar/Navbar.tsx";
import Header from "./components/Header/Header.tsx"
import About from "./components/About/About.tsx"
import Projects from "./components/Projects/Projects.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Skills from "./components/Skills/Skills.tsx";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App
