import React from 'react'
import './home.css'
import image1 from './images/textImage.jpg'
import image2 from './images/portfolioImage.jpg'
import image3 from './images/calculatorimage.png'

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
          </div>

          <div className="box">
            <img src={image2} />
            <div className="box-layer">
              <h3>Portfolio app</h3>
              <p>This is my personal portfolio app where me add my Education, Projects, Skills,  Contact, About etc </p>
              <a href="https://himm2692.github.io/myportfolio"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>
          <div className="box">
            <img src={image3} />

            <div className="box-layer">
              <h3>Calculator App</h3>
              <p>This is my calculator app </p>
              <a href="https://himm2692.github.io/calculator"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>

        </div>
        <div className="app-name">
          <h3 id='one'>TextEditor app</h3>
          <h3 id='one'>Portfolio app</h3>
          <h3 id='one'>Calculator app</h3>
        </div>
      </div>
      <div className="button">
        <button>See more</button>
      </div>
    </>
  )
}

export default Projects
