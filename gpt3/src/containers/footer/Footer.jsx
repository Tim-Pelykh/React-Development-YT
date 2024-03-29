import React from 'react'
import gpt3Logo from '../../assets/logo.svg'
import './footer.css' 

function Footer() {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>
      <div className='gpt3__footer-button'>
        <p>Request Early Access</p>
      </div>  
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt='logo'/>
          <p>Chechterwood K12 182 DK, ALKNKSND, All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms&Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get In Touch</h4>
          <p>Chechterwood K12 182 DK, ALKNKSND, All Rights Reserved</p>
          <p>98-512367</p>
          <p>info@gpt3.com</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>© 2022 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer