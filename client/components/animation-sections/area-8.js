/* eslint  no-underscore-dangle: ["error", { "allowAfterThis": true }]*/

import CountUp from 'react-countup';
import React, { Component } from 'react'
import Sensor from 'react-visibility-sensor'
import baseStyle from './base.scss';
import style from './area-8.scss';

import { Animate } from './base-animate'

// image
import bgImg from '../../../static/img/area-8/a8-background.png'
import animal1Img from '../../../static/img/area-8/a8-animal-1.png'
import animal1aImg from '../../../static/img/area-8/a8-animal-1-a.png'
import animal2Img from '../../../static/img/area-8/a8-animal-2.png'
import animal2aImg from '../../../static/img/area-8/a8-animal-2-a.png'
import animal3Img from '../../../static/img/area-8/a8-animal-3.png'
import animal3aImg from '../../../static/img/area-8/a8-animal-3-a.png'
import animal4Img from '../../../static/img/area-8/a8-animal-4.png'
import animal4aImg from '../../../static/img/area-8/a8-animal-4-a.png'
import animal5Img from '../../../static/img/area-8/a8-animal-5.png'
import animal5aImg from '../../../static/img/area-8/a8-animal-5-a.png'
import animal6Img from '../../../static/img/area-8/a8-animal-6.png'
import animal6aImg from '../../../static/img/area-8/a8-animal-6-a.png'
import animal7Img from '../../../static/img/area-8/a8-animal-7.png'
import animal7aImg from '../../../static/img/area-8/a8-animal-7-a.png'
import animal8Img from '../../../static/img/area-8/a8-animal-8.png'
import animal8aImg from '../../../static/img/area-8/a8-animal-8-a.png'

const imgs = [
  [animal1Img, animal1aImg],
  [animal2Img, animal2aImg],
  [animal3Img, animal3aImg],
  [animal4Img, animal4aImg],
  [animal5Img, animal5aImg],
  [animal6Img, animal6aImg],
  [animal7Img, animal7aImg],
  [animal8Img, animal8aImg]
]

const texts = [{
  name: '鬚鯨',
  pct: 76.9,
  total: 13
},{
  name: '北極熊',
  pct: 100,
  total: 1
},{
  name: '海牛',
  pct: 60,
  total: 5
}, {
  name: '齒鯨',
  pct: 65.7,
  total: 67
}, {
  name: '海豹',
  pct: 66.7,
  total: 33
}, {
  name: '海龜',
  pct: 100,
  total: 7
}, {
  name: '海鳥',
  pct: 50,
  total: 406
}, {
  name: '水獺',
  pct: 50,
  total: 2
}]

class Area extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toAnimate: false,
      toAnimateAnimals: false
    }
    this.onEnter = (isVisible) => {
      if (isVisible && this._isMounted) {
        this.startAnimateAnimals()
        this.setState({
          toAnimate: true
        })
      }
    }
  }

  componentDidMount() {
    this._isMounted = true
  }

  componentWillUnmount() {
    this._isMounted = undefined
    clearInterval(this.interval)
  }

  startAnimateAnimals() {
    const _this = this
    this.interval = setInterval(() => {
      _this.setState({
        toAnimateAnimals: !_this.state.toAnimateAnimals,
      });
    }, 750);
  }


  render() {
    const { toAnimate, toAnimateAnimals } = this.state
    const imgComps = []
    const textComps =[]
    imgs.forEach((imgCol, index) => {
      imgComps.push(
        <div key={`img0${index}`} className={style[`animal0${index + 1}`]}>
          <img style={{ display: toAnimateAnimals ? 'none' : 'block' }} src={imgCol[0]} role="presentation" />
          <img style={{ display: toAnimateAnimals ? 'block' : 'none' }} src={imgCol[1]} role="presentation" />
        </div>
      )
    })
    texts.forEach((obj, index) => {
      textComps.push(
        <div key={`text0${index}`} className={style[`text0${index + 1}`]}>
          <span className={style.name}>{obj.name} </span>
          { toAnimate ?
              <CountUp
                className={style.number}
                start={0}
                end={obj.pct}
                decimals={1}
                useEasing
                useGrouping
                duration={1.5}
              /> : null }
          <span style={{color: '#c59220'}}>%</span>
          <span style={{display: 'block'}}>（共{obj.total}個品種）</span>
        </div>
      )
    })
    return (
      <Sensor
        active={!toAnimate}
        onChange={this.onEnter}
        partialVisibility
        minTopValue={300}
      >
        <div className={baseStyle.area} style={{ backgroundColor: '#305b78', marginTop: '-1px' }}>
          <div className={baseStyle.container}>
            <img className={baseStyle.bg} src={bgImg} role="presentation" />
            <h2 className={style.title}>常見海洋生物，無一倖免</h2>
            <p className={style.desc}>無辜的海洋生物正面臨前所未有的殘酷死法，紀錄上的物種佔比年年高升</p>
            {imgComps}
            {textComps}
            <h3 className={style.subtitle}>遭殃物種數佔比<span>（包含「纏繞」與「食入」)</span></h3>
            <div className={style.annotation}><span>資料來源：學者Kühn(2015)</span></div>
          </div>
        </div>
      </Sensor>
    );
  }

}
export default Area;
