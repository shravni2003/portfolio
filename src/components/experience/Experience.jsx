import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills i have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_Core">
          <h3>Core Subjects</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details_icons" />
              <div>
              <h4>Data Structures</h4>
              <small className="text-light">Moderate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details_icons"/>
              <div>
                <h4>Computer Networks</h4>
                <small className="text-light">Experienced</small>
                </div>
              
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details_icons"/>
             <div>
             <h4>Operating System</h4>
             <small className="text-light">Intermediate</small>
             </div>
              
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details_icons"/>
              <div>
              <h4>DBMS</h4>
              <small className="text-light">Moderate</small>
              </div>
              
            </article>
            
          </div>
        </div>
    
        <div className="experience_other">
        <h3>Other</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details_icons"/>
              <div>
              <h4>C language</h4>
              <small className="text-light">Moderate</small>
              </div>
              
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details_icons"/>
              <div>
              <h4>C++ language</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details_icons"/>
              <div>
              <h4>HTML</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details_icons"/>
             <div>
             <h4>CSS</h4>
             <small className="text-light">Moderate</small>
             </div>       
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details_icons"/>
              <div>
              <h4>Reactjs</h4>
              <small className="text-light">Moderate</small>
              </div>       
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience