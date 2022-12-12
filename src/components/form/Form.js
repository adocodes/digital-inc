import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <section className="contact" id="contact-form">
      <div className="container">
        <form action="" id="form">
          <h2>Contact Us</h2>
          <p>We are here to help you!</p>
          <div className="form-control">
            <label className="input-label" htmlFor="name">
              Name
            </label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="form-control">
            <label className="input-label" htmlFor="email">
              Email Address
            </label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="form-control">
            <label className="input-label" htmlFor="subject">
              Subject
            </label>
            <input type="text" name="subject" id="subject" />
          </div>

          <div className="form-control">
            <label className="input-label" htmlFor="message">
              Message
            </label>
            <textarea name="message" id="message"></textarea>
          </div>
          <div className="form-control">
            <input type="submit" value="Submit" id="submit" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
