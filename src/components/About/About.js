import React from 'react';
import './About.css';
import aboutImg from '../../img/about.jpg';
function About() {
  //  Up To Top Btn
  window.addEventListener('scroll', function () {
    const upToTop = document.querySelector('a.bottom_to_top');
    upToTop.classList.toggle('active', window.scrollY > 0);
  });
  return (
    <div className='about component_space' id='About'>
      <div className='container'>
        <div className='row'>
          <div className='col_2'>
            <img src={aboutImg} alt='' className='about_img' />
          </div>
          <div className='col_2'>
            <h1 className='about_heading'>About Me</h1>
            <div className='about_meta'>
              <p className='about_text p_color'>
                I'm an experienced software engineer who constantly seeks out
                innovative solutions to everyday problems. In my seven years in
                this industry, I've honed my analytical thinking and
                collaboration skills, and I love working with a team. I've also
                had the opportunity to serve as the software engineer lead for
                three projects with First Technology.
              </p>
              <p className='about_text p_color'>
                Before my current position, I was a junior software engineer
                with Mobile First. While working there, I committed to mobile
                system development, which has been my specialty for seven years.
                I understand that a major part of this role with your firm
                focuses on leading mobile development teams, which my previous
                experience has certainly prepared me for.
              </p>
              {/* <p className='about_text p_color'>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered in some form, by injected humour,
              </p> */}
              <div className='about_button d_flex align_items_center'>
                <a href='#'>
                  <button className='about btn pointer cv'>Download Cv</button>
                </a>
                <a href='#'>
                  <button className='about btn pointer'>Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className='up_to_top_btn'>
        <a href='#' className='bottom_to_top'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            class='bi bi-chevron-up white'
            viewBox='0 0 16 16'
          >
            <path
              fill-rule='evenodd'
              d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z'
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
