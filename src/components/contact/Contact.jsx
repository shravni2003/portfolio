import React from 'react'
import './contact.css'
import  { useRef } from 'react';
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin}  from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c6geaxc', 'template_dmmkm9h', form.current, 'WqQS5PWlYxJRgp0u4')
     e.target.reset(); 
  };

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>shravaniumare2003@gmail.com</h5>
            <a href="mailto:shravaniumare2003@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact_option">
            <BsLinkedin className='contact_option-icon'/>
            <h4>Linkedin</h4>
            <h5>shravni2003</h5>
            <a href="https://www.linkedin.com/in/shravaniumare03/" target='_blank'>Send a message</a>
          </article>
          <article className="contact_option">
            <BsInstagram className='contact_option-icon'/>
            <h4>Instagram</h4>
            <h5>shravni.umare3</h5>
            <a href="https://www.instagram.com/" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact