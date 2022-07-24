import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import ProjectsLine from "./components/ProjectsLine";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="App p-2 font-mono">
      <NavBar />
      <Header />
      <ProjectsLine />
      <Contact />
    </main>
  );
}

export default App;
