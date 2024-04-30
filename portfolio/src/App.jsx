import { Link, Route, Routes } from 'react-router-dom'
import { Home } from './views/Home'
import { About } from './views/About'
import { ProjectOne } from './views/ProjectOne'
import { ProjectTwo } from './views/ProjectTwo'
import { ProjectThree } from './views/ProjectThree'
import './App.css'

function App() {

  return (
    <>
      <h1>SR</h1>

    {/* Navigation */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>

    {/* Projects */}
      <h2><Link to="/projectone">Project One</Link></h2>
      <h2><Link to="/projectone">Project Two</Link></h2>
      <h2><Link to="/projectone">Project Three</Link></h2>

    {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projectone" element={<ProjectOne />} />
        <Route path="/projecttwo" element={<ProjectTwo />} />
        <Route path="/projectthree" element={<ProjectThree />} />
      </Routes>
    </>
  )
}

export default App
