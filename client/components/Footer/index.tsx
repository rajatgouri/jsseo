import { Container } from 'components/Container'
// import Link from 'next/link'
import React, { useState, useEffect } from 'react';

export const Footer = () => {

  const [year, setYear] = useState(2021)

  useEffect(() => {    
    let d = new Date();
    let currentYear = d.getFullYear();
    setYear(currentYear);
  },[]);

  return (
    <footer>
      <Container className="text-center">
          <a href="/" className="footer__logo d-inline-block">
            <img src="/images/logo.png" className="w-100" alt="logo" />
        </a>
        <p className="mt-20 pb-40 mb-0">All rights reserved. {year}</p>
        <div className="footer-navbar" >
        <ul className="navbar-nav footer-navbar mr-auto  footer-large-screen"  >
            <li className="nav-item active">
              <a href="/chrome-extension" className="nav-link chrome-ext-link">Chrome Extension</a>
            </li>
            <li className="nav-item resource-item">
              <a href="/resources" className="nav-link resource-link">Learn</a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link about-link" >About</a>
            </li>
            <li className="nav-item privacy-item">
              <a href="/privacy" className="nav-link privacy-link">Privacy</a>
            </li>
            <li className="nav-item contact-item">
              <a href="/contact" className="nav-link contact-link" >Contact</a>
            </li> 
          </ul>

          <ul className="navbar-nav  footer-navbar mr-auto footer-small-screen"   >
            <li className="nav-item active">
              <a href="/chrome-extension" className="nav-link chrome-ext-link">Chrome Extension</a>
            </li>
            <li className="nav-item privacy-item">
              <a href="/privacy" className="nav-link privacy-link">Privacy</a>
            </li>

            <li className="nav-item resource-item">
              <a href="/resources" className="nav-link resource-link">Resources</a>
            </li>
            
            <li className="nav-item contact-item">
              <a href="/contact" className="nav-link contact-link" >Contact</a>
            </li> 
            <li className="nav-item">
              <a href="/about" className="nav-link about-link" >About</a>
            </li>
            
          </ul>

        </div>
        <div className="social-links-wrapper">
            <ul className="social-link-content">
                <li><i className="fab fa-linkedin font-20"></i><a className="s-link" href="https://www.linkedin.com/in/chris-sf" target="blank">&nbsp;&nbsp;Linkedin</a></li>
                <li><i className="fab fa-twitter font-20"></i><a className="s-link" href="https://twitter.com/javascriptseo" target="blank">&nbsp;&nbsp;Twitter</a></li>
            </ul>
         </div>
          
      </Container>
    </footer>
  )
}
