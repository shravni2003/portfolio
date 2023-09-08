import React from 'react'
import './about.css'
import MYAVATAR2 from '../../assests/me2.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
   <section id='about'>
    <h5>Get to Know</h5>
    <h2>About Me</h2>

  <div className='container about_container'>
    <div className='about_me2'>
      <div className='about_me-image'>
        <img src={MYAVATAR2} alt="About Image" />
       </div>
    </div>

    <div className="about_content">
      <div className="aboutcards">
        <article className='about_card'>
          <FaAward className='about_icon'/>
          <h5>Experience</h5>
          <small>1 + Years</small>

        </article>
        <article className='about_card'>
          <FiUsers className='about_icon'/>
          <h5>Clients</h5>
          <small>300 + clients</small>

        </article>
        <article className='about_card'>
          <VscFolderLibrary className='about_icon'/>
          <h5>Projects</h5>
          <small>1 Projects</small>

        </article>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis facere adipisci quo quis amet, porro qui architecto totam, quasi officia recusandae vel dignissimos, in quia laborum sint dolore. Necessitatibus, nihil.
      </p>

      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  </div>
   </section>
  )
}

export default About