import * as React from 'react';

const Github = () => (
  <section id="github-section">
    <div className="container">
      <div className="row clearfix">
        <div className="col-md-12 text-center">
          <h1>
            <span className="github">
              <i className="fa fa-github" />
            </span>
            <br />
            GITHUB PROJECTS
          </h1>
          <p className="lead">
            <a
              href="https://github.com/ImagineDesignDevelop/create_a_RESTful_API_tutorial"
              target="_blank"
              rel="noopener noreferrer"
            >
              Create a RESTful API Code
            </a>
          </p>
          <p className="lead">
            <a
              href="https://github.com/ImagineDesignDevelop/custom-containers-theme.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Custom Container Theme Code
            </a>
          </p>
          <a
            className="btn btn-primary btn-lg hvr-bounce-to-right"
            role="button"
            href="https://github.com/cbaston82?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW MY PUBLIC GITHUB PROJECTS <i className="fa fa-arrow-right" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Github;
