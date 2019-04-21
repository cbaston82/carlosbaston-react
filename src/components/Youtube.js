import * as React from 'react';

const Youtube = () => (
  <section id="youtube-section">
    <div className="container">
      <div className="row clearfix">
        <div className="col-md-12 text-center">
          <h1>
            <span className="youtube"><i className="fa fa-youtube" /></span>
            <br />
                Youtube Videos
          </h1>
          <p className="lead">
            <a
              href="https://www.youtube.com/playlist?list=PLcxglTh4Is9YcClaP3R5UZIvLuQSa-G_2"
              rel="noopener noreferrer"
              target="_blank"
            >
              {' '}
              <i className="fa fa-play-circle-o" aria-hidden="true" />
              {' '}
                  Watch how to Create a RESTful API using Node.js &amp; Express
            </a>

          </p>
          <a
            className="btn btn-primary btn-lg hvr-bounce-to-right"
            role="button"
            href="https://www.youtube.com/channel/UC9FdPRvIQzV4UNyK8VTlTZQ"
            rel="noopener noreferrer"
            target="_blank"
          >
                VIEW YOUTUBE CHANNEL
            {' '}
            <i className="fa fa-arrow-right" />
          </a>
        </div>
      </div>
    </div>
  </section>
);
export default Youtube;
