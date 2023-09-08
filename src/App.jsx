import React from 'react'
import Header from './components/header/Header.jsx';
import Navbar from './components/nav/Navbar.jsx';
import About from './components/about/About.jsx'
import Services from './components/services/Services.jsx';
import Portfolio from './components/portfolio/Portfolio.jsx'
import Testimonials from './components/testimonials/Testimonials.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'
import Experience from './components/experience/Experience.jsx'
const App = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    
    </>
  )
}

export default App;