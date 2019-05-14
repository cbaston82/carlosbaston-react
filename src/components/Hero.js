import * as React from 'react';

const Hero = () => (
  <section id="hero-section">
    <div className="container">
      <div className="col-md-12 text-center">
        <img
          className="img-responsive center-block"
          src="assets/img/profile2.jpg"
          alt=""
        />
        <p className="lead">
          Student of the web,
          {' '}
          <strong style={{ color: '#e67e21' }}>
            Full Stack Software Developer.
          </strong>
        </p>
        <h1>
          IMAGINE
          <br className="visible-xs" />
          {' '}
          <span className="hidden-xs">|</span>
          {' '}
          DESIGN
          <br className="visible-xs" />
          {' '}
          <span className="hidden-xs">|</span>
          {' '}
          DEVELOP
        </h1>
        <a
          className="btn btn-primary btn-lg hvr-bounce-to-right"
          href="#contact-section"
        >
          Drop me a few lines
          {' '}
          <i className="fa fa-arrow-right" />
        </a>
        <br />
      </div>
    </div>
  </section>
);

export default Hero;
