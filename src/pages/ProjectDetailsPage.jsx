import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function ProjectDetailsPage({ projects }) {


    // get the id from the URL params
    const { projectId } = useParams()
    const [searchParams, setSearchParams] = useSearchParams();

    const showCategory = searchParams.get("showCategory")
    

    // Find the first project that matches the condition project._id === id
    const foundProject = projects.find(project => project._id === projectId)

    // If it doesn't find the project, notify the user
    if (!foundProject) return <div>Project not Found.</div>

    return (
        <div>
            <h1>Project {foundProject.name} Page</h1>
            <div className='details'>
                <div className='year'>{foundProject.year}</div>
                <div className='technology'>{foundProject.technology}</div>
                <div className='description'>{foundProject.description}</div>

                {showCategory == "true" && <button className='category'>{foundProject.category}</button>}
            </div>
        </div>
    )
}

export default ProjectDetailsPage