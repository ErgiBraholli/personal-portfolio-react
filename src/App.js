import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Analytics />
      <Header />
      <Resume />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
