import React from 'react'
// import{ projects } from '../data.js'
import SingleProject from './SingleProject.jsx'
import { useFetchContent } from '../fetchProjects'
const Projects = () => {
   const { projects, loading, getData } = useFetchContent()
   return (
      <section className='projects'>
         <h2 className='title'>Projects</h2>
         <div className='title-underline'></div>
         <div className='projects-center'>
            {!loading ? (
               (projects ?? []).map((el, index) => {
                  return <SingleProject key={el.id} {...el} />
               })
            ) : (
               <h2 className='loading'></h2>
            )}
         </div>
      </section>
   )
}

export default Projects
