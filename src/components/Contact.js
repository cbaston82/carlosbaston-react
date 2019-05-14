/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */
import * as React from 'react';

const Contact = () => (
  <section id="contact-section">
    <div className="container">
      <div className="row clearfix">
        {/* <div id="contact-words" className="col-md-12 text-center">
          <p style={{ color: '#e67e21' }}>
                Please contact me if you&#39;d like to work on a project together,
                or would like to view my private portfolio of applications.
          </p>
        </div> */}

        <div className="col-md-6 text-center">
          <h1>
            <a
              href="https://twitter.com/@carlosbaston82"
              target="_blank"
              rel="noopener noreferrer"
            >
                  Twitter
              {' '}
              <i className="fa fa-twitter" aria-hidden="true" />
            </a>
          </h1>
        </div>

        <div className="col-md-6 text-center">
          <h1>
            <a
              href="https://www.linkedin.com/in/carlos-baston-04341484"
              target="_blank"
              rel="noopener noreferrer"
            >
                  LinkedIn
              {' '}
              <i className="fa fa-linkedin" aria-hidden="true" />
            </a>
          </h1>
        </div>
        <form name="contact" method="post" id="get-in-touch-form">
          <input type="hidden" name="form-name" value="contact" />
          <div className="col-md-6">
            <div className="form-group">
              <label className="sr-only" htmlFor="contact_name">
                    Name
              </label>
              <br />
              <input
                type="text"
                name="contact_name"
                className="form-control input-lg"
                placeholder="Your Name"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="sr-only" htmlFor="contact_email">
                    Email
              </label>
              <br />
              <input
                type="email"
                name="contact_email"
                className="form-control input-lg"
                placeholder="Your Email"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label className="sr-only" htmlFor="contact_subject">
                    Subject
              </label>
              <br />
              <input
                type="text"
                name="contact_subject"
                className="form-control input-lg"
                placeholder="Your Subject"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label className="sr-only" htmlFor="contact_words">
                    Message
              </label>
              <br />
              <textarea
                placeholder="Your Message"
                style={{ borderRadius: 0 }}
                name="contact_words"
                rows="5"
                className="form-control input-lg"
              />
            </div>
          </div>
          <div className="col-md-12">
            <button
              type="submit"
              name="submit"
              className="btn btn-primary btn-lg pull-right hvr-bounce-to-right"
            >
                Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;
