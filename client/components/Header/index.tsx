//import { Container } from 'components/Container'
// import Link from 'next/link'
import React, { FC } from 'react';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';


interface Props {
  logoPosition: string,
}



export const Header: FC<Props> = ({ logoPosition }) => {

  
  const showMenu = () => {
    const classExist = document.querySelector("#mobileMenu");
    if (classExist!.classList.contains("mobileMenu")) {
      classExist!.classList.remove("mobileMenu");
      document.getElementById("mobileFooterMenu")!.style.display = "none";
      document.getElementById("closeIcon")!.style.display = "none";
      //document.getElementById("homeSection")!.style.display = "block";
    } else {
      classExist!.classList.add("mobileMenu");
      document.getElementById("mobileFooterMenu")!.style.display = "flex";
      document.getElementById("closeIcon")!.style.display = "block";
      //document.getElementById("homeSection")!.style.display = "none";
    } 
  }
 
  const hideMenu = () => {
      const classExist = document.querySelector("#mobileMenu");
      classExist!.classList.remove("mobileMenu");
      document.getElementById("mobileFooterMenu")!.style.display = "none";
      document.getElementById("closeIcon")!.style.display = "none";
  }
    

  return (  
    <header className="header">
      <nav className="nav">
        <div className="collapse navbar-container navbar-collapse" id="navbarSupportedContent">
        <div className="logo_box">
          <a href="/"
            className={`header__logo${
              logoPosition === 'center' ? '--small' : ''
            }  d-inline-block`}
          >
            <img className="w-100" src="/images/logo.png" alt="logo" />
          </a>
        </div>
          <ul className="navbar-nav mr-auto" id="mobileMenu">         
            <li className="nav-item">
              <a href="/resources" className="nav-link" >Learn</a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">About</a>
            </li>
            <li className="nav-item active">
              <a href="/chrome-extension" className="nav-link" >Chrome Extension</a>
            </li>
            {/* <li className="nav-item">
              <a href="/privacy" className="nav-link">Privacy</a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">Contact</a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link install-ext-link" href="#">Install Extension</a>
            </li> */} 
          </ul>
          <div className="social-links-nav-mobile" id="mobileFooterMenu" style={{display:"none"}}>
              <a href="https://www.linkedin.com/in/chris-sf" target="blank" className="mobile-social-link nav-link likedin-link"><i className="fab fa-linkedin"></i> Linkedin</a>
              <a href="https://twitter.com/javascriptseo" target="blank" className="mobile-social-link nav-link twitter-link"><i className="fab fa-twitter"></i> Twitter</a>
            </div>
          <div className="install_ext">
           <a className="nav-link install-ext-link" target="blank" href="https://chrome.google.com/webstore/detail/javascriptseoio-chrome-ex/hggfoakomjdibaepkglijahnhdabaajg?hl=en-US">Install Extension</a>
           <a className="navbar-toggle dsktop-toggle-none" href="#" onClick={showMenu}><i className="fas fa-bars"></i></a>
           <a className="navbar-toggle dsktop-toggle-none close-icon" href="#" id="closeIcon" onClick={hideMenu}><i className="fas fa-times"></i></a>
          </div>
        </div>
      </nav>  



      {/* <Container
        className={`${logoPosition === 'center' ? 'text-center' : ''}`}>
        <Link href="/">
          <a
            className={`header__logo${
              logoPosition === 'center' ? '--small' : ''
            }  d-inline-block`}
          >
            <img className="w-100" src="/images/logo.png" alt="logo" />
          </a>
        </Link>
      </Container> */}
    </header>
  )
}
