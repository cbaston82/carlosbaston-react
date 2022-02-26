import * as React from 'react';
import axios from 'axios';

class ChuckNorris extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: '',
    };
    this.next = this.next.bind(this);
  }

  componentDidMount() {
    const th = this;
    axios.get('https://api.icndb.com/jokes/random').then((event) => {
      th.setState({
        joke: JSON.stringify(event.data.value.joke),
      });
    });
  }

  next() {
    const next = this;
    axios.get('https://api.icndb.com/jokes/random').then((event) => {
      next.setState({
        joke: JSON.stringify(event.data.value.joke),
      });
    });
  }

  render() {
    const { joke } = this.state;
    return (
      joke && (
        <section
          style={{
            background: '#0e171c',
            padding: '45px 0px 50px',
            color: '#ffffff',
          }}
        >
          <div className="container">
            <div className="row clearfix">
              <div className="col-sm-12 text-center vissible-lg">
                <img
                  className="chuck_norris_face"
                  style={{ height: '40px' }}
                  src="assets/img/chuck_norris.png"
                  alt=""
                  title=""
                />
                <p className="joke">{joke}</p>
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={this.next}
                  rel="noopener noreferrer"
                >
                  Get Another Joke
                </button>
                &nbsp; | &nbsp;
                <a
                  href="https://github.com/ImagineDesignDevelop/chuck_norris_terminal_jokes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get these jokes in your terminal
                </a>
              </div>
            </div>
            <div
              className="row clear-fix text-center"
              style={{ marginTop: '20px' }}
            >
              <i className="fa fa-copyright" aria-hidden="true" /> 2012 - 2019
              carlosbaston.com
            </div>
          </div>
        </section>
      )
    );
  }
}

export default ChuckNorris;
