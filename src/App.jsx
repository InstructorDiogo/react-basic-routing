
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import NavBar from './components/NavBar'
import projectsJSON from './assets/projects-data.json'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import LoggedInPage from './pages/LoggedInPage'
import _404Page from './pages/_404Page'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailsPage from './pages/ProjectDetailsPage'

function App() {


  const [projects, setProjects] = useState(projectsJSON)

  return (
    <>

      <NavBar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/dashboard' element={<LoggedInPage />} />

        {/* Get all the projects */}
        <Route path='/projects' element={<ProjectsPage projects={projects} />} />

        {/* Get one project */}
        <Route
          path="/projects/:projectId"
          element={<ProjectDetailsPage projects={projects} />}
        />

        <Route path='*' element={<_404Page />} />
      </Routes>

    </>
  )
}

export default App
