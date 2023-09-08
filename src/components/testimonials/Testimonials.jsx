import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assests/avatar1.jpg'
import AVTR2 from '../../assests/avatar2.jpg'
import AVTR3 from '../../assests/avatar3.jpg'
import AVTR4 from '../../assests/avatar4.jpg'
import { RiArrowLeftCircleLine } from 'react-icons/ri'

import {  Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const data = [
  {
    avatar: AVTR1,
    name: 'Swarada Bhosale',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi nulla repellat vitae maxime quibusdam esse consequatur et sit totam, inventore animi nesciunt perspiciatis, suscipit at beatae nemo possimus corporis vel?'
  },
  {
    avatar: AVTR2,
    name: 'Yashashwi Patil',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi nulla repellat vitae maxime quibusdam esse consequatur et sit totam, inventore animi nesciunt perspiciatis, suscipit at beatae nemo possimus corporis vel?'
  },
  {
    avatar: AVTR3,
    name: 'Jyotiraditya Patil',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi nulla repellat vitae maxime quibusdam esse consequatur et sit totam, inventore animi nesciunt perspiciatis, suscipit at beatae nemo possimus corporis vel?'
  }

]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Friends</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials_container"
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
     >
         {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client_avatar">
                  <img src={avatar}/>
                </div>
                <h5 className="client_name">
                  {name}
                </h5>
                <small className="client_review">
                  {review}
                </small>
              </SwiperSlide>
            )
          })
         }
      </Swiper>
    </section>
  )
}

export default Testimonials