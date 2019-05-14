import * as React from 'react';

const About = () => (
  <section id="about-section">
    <div className="container">
      <div className="row clearfix">
        <div className="col-md-12">
          <h1>ABOUT ME</h1>
          <p className="lead about-me">
            Hello Folks I&rsquo;m
            {' '}
            <strong>Carlos</strong>
            {' '}
             and I&rsquo;m a software developer based out of Las Vegas, Nevada. I enjoys
             developing dynamic applications using all the latest frameworks and
             techniques. I also enjoy working with the
            {' '}
            <a href="https://en.wikipedia.org/wiki/LAMP_(software_bundle)">LAMP</a>
            {' '}
            and
            {' '}
            <a href="https://en.wikipedia.org/wiki/MEAN_(software_bundle)">MEAN</a>
            {' '}
            Stack environments and I&rsquo;m currently working as FullStack Javascript
            Developer with a little bit of PHP on the side. Outside of working
            and studying to perfect my development skills, I also enjoys playing
            the game of billiards (9-Ball and 8-ball to be exact) around the Las
            Vegas area.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
