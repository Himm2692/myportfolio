import React, { useState } from 'react'
import './contact.css'

const Contact = () => {
  const [data , setData] = useState({
    name : "",
    email : "",
    message : ""
  })

  const handleInput = (e)=>{
    setData(e.target.value)
  }
 const handleSubmit=(e)=>{
  e.preventDefault()
  setData({name : "" , email  : "", message : ""})
 }
  
  return (
    <>

      <h1>Contact me</h1>
      <div className='contact'>

        <div className="contact-left">
          <p><i className="fa-solid fa-paper-plane"></i> himanshunigam63@gmail.com</p>
          <p><i className="fa-solid fa-phone"></i> 7703048167</p>
          <div className="social-icon">
            <a href="https://www.facebook.com/himanshu.nigam.9256"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://instagram.com/himanshunigam123"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/himanshu-nigam-b3b113256"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://twitter.com/Himansh11325167"><i className="fa-brands fa-twitter"></i></a>
          </div>
        </div>
        <div className="contact-right">
          <form onSubmit={handleSubmit}>
              <input type="text" name='name' value={data.name} onChange={handleInput} placeholder='Your Name' required></input>
              <input type="email" name='email' value={data.email} onChange={handleInput} placeholder='Your Email' required></input>
              <textarea type="message" rows="6" value={data.message} onChange={handleInput} name='message' placeholder='Your Message'  required ></textarea>
            <button type="submit" className="btn btn2" >Submit</button>
          </form>
        </div>
      </div>



    </>
  )
}

export default Contact
