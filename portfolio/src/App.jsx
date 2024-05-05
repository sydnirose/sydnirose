import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './views/Home';
import { ProjectPage } from './views/ProjectPage'
import projectData from "./assets/project-data.json"

function App() {

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":slug" element={<ProjectPage data={projectData}/>} />
      </Routes>
  )
}

export default App