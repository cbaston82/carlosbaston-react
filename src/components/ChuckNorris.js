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
    axios.get('https://api.icndb.com/jokes/random')
      .then((event) => {
        th.setState({
          joke: JSON.stringify(event.data.value.joke),
        });
      });
  }

  next() {
    const next = this;
    axios.get('https://api.icndb.com/jokes/random')
      .then((event) => {
        next.setState({
          joke: JSON.stringify(event.data.value.joke),
        });
      });
  }

  render() {
    const { joke } = this.state;
    return (
      joke
        && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            background: '#c7ebff',
            padding: '7px 0px',
          }}
          className="col-sm-12 text-center"
        >
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
            <span role="img" aria-label="computer emoji"> 💻</span>
            <span role="img" aria-label="computer emoji"> 🖥️</span>
          </a>
        </div>
        )
    );
  }
}

export default ChuckNorris;
