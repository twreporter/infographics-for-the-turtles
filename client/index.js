import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Opening from './components/animation-sections/opening';
import Area1 from './components/animation-sections/area-1';
import Area2 from './components/animation-sections/area-2';
import Area3 from './components/animation-sections/area-3';
import Area4 from './components/animation-sections/area-4';
import Area5 from './components/animation-sections/area-5';
import Area6 from './components/animation-sections/area-6';
import Area7 from './components/animation-sections/area-7';
import Area8 from './components/animation-sections/area-8';
import Area9 from './components/animation-sections/area-9';
import Area10 from './components/animation-sections/area-10';
import Footer from './components/animation-sections/footer';
import style from './style.css';

const spinner = 'https://storage.googleapis.com/twreporter-multimedia/images/spinner-logo.gif'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
    }
  }
  componentDidMount() {
    window.onload = setTimeout(() => {
      this.setState({
        isLoaded: true,
      })
    }, 1000)
  }

  render() {
    const loaderJSX = !this.state.isLoaded ? (
      <div
        style={{
          position: 'fixed',
          height: '100vh',
          width: '100%',
          zIndex: 1999,
          backgroundColor: 'white',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <img src={spinner} width="50px" role="presentation" />
        </div>
      </div>
    ) : null

    return (
      <div className={style.normal}>
        {loaderJSX}
        <Opening />
        <Area1 />
        <Area2 />
        <Area3 />
        <Area4 />
        <Area5 />
        <Area6 />
        <Area7 />
        <Area8 />
        <Area9 />
        <Area10 />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);
