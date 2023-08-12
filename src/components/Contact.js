import React, { useState } from 'react'
import './contact.css'

const Contact = () => {
  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [message , setMessage] = useState("")

  const nameChange =(e)=>{
    setName(e.target.value)
  }
  const emailChange =(e)=>{
    setEmail(e.target.value)
  }
  const messageChange =(e)=>{
    setMessage(e.target.value)
  }
 
 const handleSubmit=(e)=>{
  e.preventDefault()
  setName("")
  setEmail("")
  setMessage("")
 }
  
  return (
    <>

      <h1>Contact me</h1>
      <div className='contact'>

        <div className="contact-left">
          <p><i className="fa-solid fa-paper-plane"></i> himanshunigam63@gmail.com</p>
          <p><i className="fa-solid fa-phone"></i> 1234567890</p>
          <div className="social-icon">
            <a href="https://www.facebook.com/himanshu.nigam.9256"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://instagram.com/himanshunigam123"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/himanshu-nigam-b3b113256"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://twitter.com/Himansh11325167"><i className="fa-brands fa-twitter"></i></a>
          </div>
        </div>
        <div className="contact-right">
          <form onSubmit={handleSubmit}>
              <input type="text" name='name' value={name} onChange={nameChange} placeholder='Your Name' required></input>
              <input type="email" name='email' value={email} onChange={emailChange} placeholder='Your Email' required></input>
              <textarea type="message" rows="6" value={message} onChange={messageChange} name='message' placeholder='Your Message'  required ></textarea>
            <button type="submit" className="btn btn2" >Submit</button>
          </form>
        </div>
      </div>



    </>
  )
}

export default Contact
