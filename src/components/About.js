import React from 'react'
import './home.css'
import me from './images/me.jpg'

const About = () => {
  return (
    <>
      <h2 className='about-title'>About Me</h2>
      
      
      <div className='about'>
        <div className="left-photo">
          <img src={me} alt="" />
        </div>
        <div className='about-me'>
          Hello,<br />I am Himanshu Nigam and I am Passionate About Web Development goal is to achieve A good position by doing satisfying Work in the IT- Field, Strongly focused to Complete the tasks in Fast - Faced Environment....
          I want to work with an organization where can learn new skills and increase my abilities for the organizational goals as well as myself.
        </div>
      </div>
      
    </>
  )
}

export default About
