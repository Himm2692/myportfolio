import React from 'react'
import './home.css'
import image1 from './images/textImage.jpg'
import image2 from './images/portfolioImage.jpg'
import image3 from './images/calculatorimage.png'
import image4 from './images/music.jpg'
import image5 from './images/shopping.jpg'

const Projects = () => {
  return (
    <>
      <div className='projects'>
        <h2 className='project-title'>Latest Projects</h2>
        <div className="box-head">
          <div className="box">
            <img src={image1} />
            <div className="box-layer">
              <h3>TextEditor app</h3>
              <p>This is my app where we can convert words from Lowercase to uppercase , uppercase to lowercase and we can also copy to clipboard words , character counter , words counter here dark mode also available</p>
              <a href="https://himm2692.github.io/TextEditor/"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
            <h3 id='one'>TextEditor app</h3>
          </div>


          <div className="box">
            <img src={image2} />
            <div className="box-layer">
              <h3>Portfolio app</h3>
              <p>This is my personal portfolio app where me add my Education, Projects, Skills,  Contact, About etc </p>
              <a href="https://himm2692.github.io/myportfolio"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
            <h3 id='one'>Portfolio app</h3>
          </div>

          <div className="box">
            <img src={image3} />
            <div className="box-layer">
              <h3>Calculator App</h3>
              <p>this is my calculator app where you can calculate or evaluate your expression in this app i using html, css and JavaScript</p>
              <a href="https://himm2692.github.io/calculator"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
            <h3 id='one'>Calculator app</h3>
          </div>

          <div className="box">
            <img src={image4} />
            <div className="box-layer">
              <h3>Music App</h3>
              <p>This is my 4th project music app in this app you will listen some music or ringtone in this play stop function , previous button , next button
                in this app i use html, css and javaScript </p>
              <a href="https://himm2692.github.io/musicapp"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
            <h3 id='one'>Music app</h3>
          </div>
          <div className="box">
            <img src={image5} />
            <div className="box-layer">
              <h3>Shopping App</h3>
              <p>This is shopping app where you can see lots of products and details of each product and you can also add to cart any product and delete it also . data come from fetch api... In this app i used Html, javascript, bootstrap, redux and react js </p>
              <a href="https://himm2692.github.io/shopping"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
            <h3 id='one'>Shopping App</h3>
          </div>
        </div>

      </div>

      <div className="button">
        <button>See more</button>
      </div>
    </>
  )
}

export default Projects
