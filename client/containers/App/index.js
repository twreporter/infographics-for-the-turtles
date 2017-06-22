import React, { Component } from 'react';
import Opening from '../../components/animation-sections/opening';
import Area1 from '../../components/animation-sections/area-1';
import Area2 from '../../components/animation-sections/area-2';
import Area3 from '../../components/animation-sections/area-3';
import Area4 from '../../components/animation-sections/area-4';
import Area5 from '../../components/animation-sections/area-5';
import Area6 from '../../components/animation-sections/area-6';
import Area7 from '../../components/animation-sections/area-7';
import Area8 from '../../components/animation-sections/area-8';
import Area9 from '../../components/animation-sections/area-9';
import Area10 from '../../components/animation-sections/area-10';
import Footer from '../../components/animation-sections/footer';
import style from './style.css';

class App extends Component {
  render() {
    return (
      <div className={style.normal}>
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

export default App;
