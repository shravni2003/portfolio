import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I am?</h5>
      <h2>Positions</h2>
    
      <div className='container services_container'>
        <article className="services">
          <div className="service_head">
            <h3>
              PRO
            </h3>
          </div>

          <ul className="service_list">
            <li >
              <BiCheck className="service_list-icon"/>
              <p>Public Relation Officer at WLUG</p>
            </li>
            <li >
            <BiCheck className="service_list-icon"/>
              <p>My work is to make messages for all the events conducted by club</p>
            </li>
            <li >
            <BiCheck className="service_list-icon"/>
              <p>Also doing publicity of the events in our collge as well as the other</p>
            </li>
            <li >
            <BiCheck className="service_list-icon"/>
              <p>Due to this I have improved alot in my communication skills</p>
            </li>
          </ul>
        </article>

        <article className="services">
          <div className="service_head">
            <h3>
              Art Designer
            </h3>
          </div>

          <ul className="service_list">
            <li >
            <BiCheck className="service_list-icon"/>
              <p>Art Designer at SAIT</p>
            </li>
            <li >
            <BiCheck className="service_list-icon"/>
              <p>My work here is to create poster for the events conducted by club</p>
            </li>
            <li >
            <BiCheck className="service_list-icon"/>
              <p>Also doing all the art related work in the club</p>
            </li>
            <li >
            <BiCheck className="service_list-icon"/>
              <p>Due to this I have increased my design skills</p>
            </li>
            <li >
            <BiCheck className="service_list-icon"/>
              <p>Due to this I have increased my design skills</p>
            </li>
          </ul>
        </article>

        <article className="services">
          <div className="service_head">
            <h3>
              Editor
            </h3>
          </div>

          <ul className="service_list">
            <li >
            <BiCheck className="service_list-icon"/>
              <p>Editor at SAIT</p>
            </li>
            <li >
            <BiCheck className="service_list-icon"/>
              <p>My work is to make videos for all the events conducted by club</p>
            </li>
            <li >
            <BiCheck className="service_list-icon"/>
              <p>The video creation includes Teaser as well as Trailer of any event</p>
            </li>
            <li >
            <BiCheck className="service_list-icon"/>
              <p>Due to this I have increased my editing skills</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
    
  )
}

export default Services