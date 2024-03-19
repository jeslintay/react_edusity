import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt='' className='about-img'/>
            <img src={play_icon} alt='' className='play_icon'/>

        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <p>At Edusity, we are dedicated to shaping the future by educating the 
              next generation of leaders, innovators, and thinkers. Our commitment to academic
               excellence is evident through our diverse range of programs, state-of-the-art 
               facilities, and a faculty of renowned scholars and industry professionals. With 
               a focus on real-world applications, our curriculum is designed to equip students 
               with the skills necessary to address complex challenges and make meaningful contributions to society. </p>
        </div>

    </div>
  )
}

export default About