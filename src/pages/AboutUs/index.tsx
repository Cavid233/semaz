import React from 'react'
import OurProducts from './OurProducts'
import BannerAbout from './BannerAbout'
import Navbar from '../Home/Navbar/Navbar'
import "./AboutUs.sass"

export default function Aboutus() {
  return (
    <div className='about-us'>
        <Navbar />
        <BannerAbout />
        <OurProducts />
    </div>
  )
}
