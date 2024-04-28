import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.tsx';
import Header from './components/Header/Header.tsx';
import About from './components/About/About.tsx';
import Projects from './components/Projects/Projects.tsx';
import Footer from './components/Footer/Footer.tsx';
import Skills from './components/Skills/Skills.tsx';
import Imprint from './components/Imprint/Imprint.tsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route 
        path="/" 
        element={<Home />} />
        <Route 
        path="/impressum" 
        element={<Imprint />} />
      </Routes>
      <Footer/>
    </>
  );
}

function Home() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
