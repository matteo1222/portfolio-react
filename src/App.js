import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import ProjectsLine from "./components/ProjectsLine";
import Contact from "./components/Contact";
import Experiments from "./components/Experiments";

function App() {
  return (
    <main className="App p-2 font-mono">
      <NavBar />
      <Header />
      <ProjectsLine />
      {/* Spacing */}
      <div className="p-10"></div>
      <Experiments />
      <Contact />
    </main>
  );
}

export default App;
