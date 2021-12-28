import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import { init } from 'ityped';
import logo from '../../img/logo.png';
import {
  Close,
  DehazeOutlined,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter
} from '@material-ui/icons';

function Home() {
  // fixed Header
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    header.classList.toggle('active', window.scrollY > 0);
  });
  // Toogle Menu
  const [show, setShow] = useState(false);

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        'Software Developer.',
        'MERN Stack Developer.',
        'Java Developer.',
        'C++ Developer.',
        'C Developer.'
      ]
    });
  }, []);

  return (
    <div className='home' id='Home'>
      <div className='home_bg'>
        <div className='header d_flex align_items_center pxy_30'>
          <div className='logo'>
            <img src={logo} style={{ width: '50px', height: '50px' }} alt='' />
          </div>
          <div className='navigation pxy_30'>
            <ul className='navbar d_flex'>
              <a href='#Home'>
                <li className='nav_items mx_15'>Home</li>
              </a>
              <a href='#About'>
                <li className='nav_items mx_15'>About</li>
              </a>
              <a href='#Services'>
                <li className='nav_items mx_15'>Services</li>
              </a>
              <a href='#Portfolio'>
                <li className='nav_items mx_15'>Portfolio</li>
              </a>
              <a href='#Blog'>
                <li className='nav_items mx_15'>Blog</li>
              </a>
              <a href='#Contact'>
                <li className='nav_items mx_15'>Contact</li>
              </a>
            </ul>
          </div>

          <div className='social_media_icons'>
            <span>
              <Facebook
                className='fb'
                fontSize='large'
                style={{ marginRight: '7px' }}
              />
              <LinkedIn
                className='linkedin'
                fontSize='large'
                style={{ marginRight: '7px' }}
              />
              <GitHub
                className='github'
                fontSize='large'
                style={{ marginRight: '7px' }}
              />
              <Twitter fontSize='large' style={{ marginRight: '7px' }} />
              <Instagram fontSize='large' style={{ marginRight: '7px' }} />
            </span>
          </div>

          <div className='toggle_menu'>
            {show ? (
              <span onClick={() => setShow(!show)}>
                <Close />
              </span>
            ) : (
              <span onClick={() => setShow(!show)}>
                <DehazeOutlined />
              </span>
            )}
          </div>

          {show ? (
            <div className='sideNavbar'>
              <ul className='sidebar d_flex'>
                <li className='sideNavbar'>
                  <a href='#home' onClick={() => setShow(!show)}>
                    Home
                  </a>
                </li>
                <li className='sideNavbar'>
                  <a href='#about' onClick={() => setShow(!show)}>
                    About
                  </a>
                </li>
                <li className='sideNavbar'>
                  <a href='#services' onClick={() => setShow(!show)}>
                    Services
                  </a>
                </li>
                <li className='sideNavbar'>
                  <a href='#portfolio' onClick={() => setShow(!show)}>
                    Portfolio
                  </a>
                </li>
                <li className='sideNavbar'>
                  <a href='#blog' onClick={() => setShow(!show)}>
                    Blog
                  </a>
                </li>
                <li className='sideNavbar'>
                  <a href='#contact' onClick={() => setShow(!show)}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>

        {/* HOME CONTENT */}
        <div className='container'>
          <div className='home_content'>
            <div className='home_meta'>
              <h1 className='home_text pz_10'>WELCOME TO MY WORLD</h1>
              <h2 className='home_text pz_10'>Hi, I’m Sandesh Parajuli</h2>
              <h3 className='home_text sweet pz_10' ref={textRef}></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
