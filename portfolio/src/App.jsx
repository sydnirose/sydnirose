import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './views/Home';
import { ProjectPage } from './views/ProjectPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":slug" element={<ProjectPage />} />
    </Routes>
  )
}

export default App