/* eslint  no-underscore-dangle: ["error", { "allowAfterThis": true }]*/

import React, { Component } from 'react'
import Sensor from 'react-visibility-sensor'
import baseStyle from './base.scss'
import style from './area-2.scss'

// image
import bgImg from '../../../static/img/area-2/a2-background.png'
import garbageImg from '../../../static/img/area-2/a2-garbage.png'
import rank01Img from '../../../static/img/area-2/a2-rank-1.png'
import rank02Img from '../../../static/img/area-2/a2-rank-2.png'
import rank03Img from '../../../static/img/area-2/a2-rank-3.png'
import rank04Img from '../../../static/img/area-2/a2-rank-4.png'
import rank05Img from '../../../static/img/area-2/a2-rank-5.png'

import { Animate } from './base-animate'

const ranks = [rank01Img, rank02Img, rank03Img, rank04Img, rank05Img]
const ranksImgAlts = ['菸蒂：2,127,565 根', '寶特瓶：1,024,470 個', '食物包裝紙：888,589 個',
  '塑膠瓶蓋：861,340 個', '吸管： 438,571 根']

class Rank extends Component {
  render() {
    const { index, toAnimate } = this.props
    const tops = [149, 224, 299, 376, 451]
    const baseHeight = 591
    return (
      <Animate
        className={style[`rank0${index + 1}`]}
        imgSrc={ranks[index]}
        imgAlt={ranksImgAlts[index]}
        animation={toAnimate ? { top: `${tops[index] / baseHeight * 100}%` } : { top: '1000px' }}
        duration={500}
        easing={toAnimate ? [500, 20] : undefined}
        delay={(index + 1) * 500}
      />
    )
  }
}

class Area extends Component {

  constructor(props) {
    super(props)
    this.state = {
      toAnimate: false,
    }
    this.startAnimation = this.startAnimation.bind(this)
  }

  startAnimation(isVisible) {
    if (isVisible) {
      this.setState({
        toAnimate: true,
      })
    }
  }

  render() {
    const toAnimate = this.state.toAnimate
    const ranksComp = []
    for (let i = 0; i < 5; i++) {
      ranksComp.push(
        <Rank
          index={i}
          key={i}
          toAnimate={toAnimate}
        />
      )
    }

    return (
      <Sensor
        active={!toAnimate}
        onChange={this.startAnimation}
        partialVisibility
        minTopValue={300}
      >
        <div className={baseStyle.area} style={{ backgroundColor: '#305b78', marginTop: '-1px' }}>
          <div className={baseStyle.container}>
            <img className={baseStyle.bg} src={bgImg} role="presentation" />
            <div className={style.headerTwo}><h2>追不上的垃圾入海速度</h2></div>
            <div className={style.desc}><p>2015年，全球淨灘拾起超過8千公噸的垃圾</p></div>
            {ranksComp}
            <div className={style.garbage}><img src={garbageImg} role="presentation" /></div>
          </div>
        </div>
      </Sensor>
    )
  }

}
export default Area
