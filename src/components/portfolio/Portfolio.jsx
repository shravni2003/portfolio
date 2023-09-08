import React from 'react'
import './portfolio.css'
import Port from '../../assests/7744161.jpg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>
        My Recent Work
      </h5>
      <h2>
        Projects
      </h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
             <img src={Port} alt="" />
          </div>

          <h3>This is a Project</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className="btn">Github</a>
          <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
          
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
          <img src={Port} alt="" />
          </div>
          <h3>This is a Project</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className="btn">Github</a>
          <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
          <img src={Port} alt="" />
          </div>
          <h3>This is a Project</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className="btn">Github</a>
          <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target='blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio