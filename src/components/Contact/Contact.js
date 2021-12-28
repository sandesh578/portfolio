import { useState } from 'react';
import './Contact.css';
import contactImg from '../../img/about-9.jpg';
function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className='contact component_space' id='Contact'>
        <div className='row'>
          <div className='col_2'>
            <div className='contact_box'>
              <div className='contact_meta'>
                <h1 className='hire_text'>Hire Me.</h1>
                <p className='hire_text white'>
                  I am available for work. Connect with me via phone:
                </p>
                <p className='hire_text white'>
                  <strong>+977-9861392656</strong> or email{' '}
                  <strong>parajulisandesh@gmail.com</strong>
                </p>
              </div>
              <div className='input_box'>
                <input
                  type='text'
                  className='contact name'
                  placeholder='Your name *'
                />
                <input
                  type='text'
                  className='contact email'
                  placeholder='Your Email *'
                />
                <input
                  type='text'
                  className='contact subject'
                  placeholder='Write a Subject'
                />
                <textarea
                  name='message'
                  id='message'
                  placeholder='Write Your message'
                ></textarea>
                <button className='btn contact pointer' type='submit'>
                  Submit
                </button>
                {message && <span>Thanks, I'll reply ASAP 🙂</span>}
              </div>
            </div>
          </div>
          <div className='col_2'>
            <img src={contactImg} alt='' className='contact_img' />
          </div>
        </div>
      </div>
    </form>
  );
}

export default Contact;
