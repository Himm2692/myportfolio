import React from 'react'
import bg from "./images/bg.png"
import { useEffect } from 'react';
import Typed from 'typed.js'
import "./home.css"
import resume from './Himanshuresume.pdf'

const Home = () => {
  useEffect(() => {

    const options = {
      strings: ["Web development"],

      typeSpeed: 100,
      backSpeed: 50,

      loop: true,
    };

    const typed = new Typed('#instruction', options);
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <main>
        <section className='firstSection'>
          <div className='leftSection'>
            <div>Hello,  </div>My name is <span className="text-purple"> Himanshu</span>
            <div>and I am passionate</div>

            <span id="instruction"></span>
            <div>
              <div className='btn' style={{ marginTop: "40px" }}>
                <a href={resume} download="Resume" >Download CV</a>
              </div>
            </div>
          </div>



          <div className='rightSection'>
            <img src={bg} alt='' />
          </div>

        </section>
        <hr />
        <section className='secondSection'>
          <span className='text-grey'>What i have done so far</span>
          <div className='title'><h1>Skills</h1></div>

          <ul className='skills'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>REACT JS</li>
            <li>BOOTSTRAP</li>
            <li>WEB DEVELOPMENT</li>
          </ul>
          <h1 className='title2'>Education</h1>
          <div className="contents">
            <div className="box">
              <h4>(2018 )</h4>
              <h3>High School degree</h3>
              <p>I completed my high school from Deen dayal college Deoria and In high school my % is 79.5 %  </p>
            </div>
            <div className="box">
              <h4>(2020)</h4>
              <h3>Intermediate degree</h3>
              <p>I completed my Intermediate school from Deen dayal college Deoria and In Intermediate my % is 79.5 % </p>
            </div>
            <div className="box">
              <h4>(2020 - 2023)</h4>
              <h3>Bachelor's degree </h3>
              <p>I completed my bachelor degree from Deen Dayal University Gorakhpur in 2023 </p>
            </div>
          </div>




        </section>

      </main>
      <footer className='footer'>
        Copyright &copy; Himanshu's portfolio  | |  All right reserved

      </footer>

    </>
  )
}

export default Home
