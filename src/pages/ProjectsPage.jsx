import React from 'react'
import { Link } from 'react-router-dom'

function ProjectsPage({ projects }) {

    return (
        <div>
            {projects.map(project => <div key={project._id}>

                <Link to={`/projects/${project._id}`}>{project.name}</Link>
                
            </div>)}
        </div>
    )
}

export default ProjectsPage