import * as React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#main-navbar-collapse"
          aria-expanded="false"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a className="navbar-brand" href="#hero-section">
          Carlos Baston
        </a>
      </div>
      <div className="collapse navbar-collapse" id="main-navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
          <li><a className="about-me" href="#about-section">ABOUT ME</a></li>
          <li><a className="knowledge" href="#knowledge-section">KNOWLEDGE</a></li>
          <li><a className="github" href="#github-section">GITHUB</a></li>
          <li><a className="contact-me" href="#contact-section">CONTACT</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
