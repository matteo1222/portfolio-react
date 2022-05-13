import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import ProjectsLine from './components/ProjectsLine';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App p-2">
      <NavBar />
      <Header />
      <ProjectsLine />
      <Contact />
    </div>
  );
}

export default App;
