import React from 'react';
import footerImg from '../../img/logo.png';
import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter
} from '@material-ui/icons';

function Footer() {
  return (
    <div
      className='footer d_flex align_items_center justify_content_space_between pz-10'
      style={{ padding: '10px 20px', zIndex: '100' }}
    >
      <img src={footerImg} alt='' className='footer_img pointer' />
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
      <span
        className='copyright'
        style={{ color: '#c6c9d8', fontSize: '14px', opacity: '0.75' }}
      >
        Copyright © 2021 Sandesh Parajuli. All Rights Reserved.
      </span>
    </div>
  );
}

export default Footer;
