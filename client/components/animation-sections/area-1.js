/* eslint  no-underscore-dangle: ["error", { "allowAfterThis": true }]*/

import CountUp from 'react-countup'
import React, { Component } from 'react'
import Sensor from 'react-visibility-sensor'
import cx from 'classnames'
import baseStyle from './base.scss'
import style from './area-1.scss'

// image
import bgImg from '../../../static/img/area-1/a1-background.png'
import garbageImg from '../../../static/img/area-1/a1-garbage.png'
import truckImg from '../../../static/img/area-1/a1-truck.png'
import rankImg from '../../../static/img/area-1/a1-rank.png'

import { Animate } from './base-animate'

require('velocity-animate')
require('velocity-animate/velocity.ui')

class AnimationSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toAnimate: false,
    }
    this.onEnter = this.onEnter.bind(this)
  }

  componentDidMount() {
    this._isMounted = true
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  onEnter(isVisible) {
    if (isVisible && this._isMounted) {
      this.setState({
        toAnimate: true,
      })
    }
  }

  render() {
    const { toAnimate } = this.state
    return (
      <Sensor
        active={!toAnimate}
        onChange={this.onEnter}
        partialVisibility
        minTopValue={300}
      >
        { toAnimate ?
          <div style={{ display: 'inline-block' }}>{this.props.children}</div>
            : <div />
        }
      </Sensor>
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

  startAnimation() {
    if (!this.state.toAnimate) {
      this.setState({
        toAnimate: true,
      })
    }
  }

  render() {
    const { toAnimate } = this.state

    function getRankingAnimationData(toStartAnimation) {
      let animation = {
        opacity: 0,
        left: '100%',
        top: '100%',
        scale: 10,
      }

      if (toStartAnimation) {
        animation = {
          opacity: 1,
          left: '0%',
          right: '0%',
          top: `${646 / 998 * 100}%`,
          scale: 1,
        }
      }

      return {
        animation,
      }
    }

    return (
      <div className={baseStyle.area} style={{ backgroundColor: '#204056', marginTop: '-1px' }}>
        <div className={baseStyle.container}>
          <img className={baseStyle.bg} src={bgImg} role="presentation" />
          <div className={style.headerTwo}><h2>台灣，驚人的垃圾生產國</h2></div>
          <div className={cx(style.desc, style.first)}><p>台灣雖小，垃圾產量卻高居全球第 13 名，每天垃圾量至少 5,100 台垃圾車才載得完</p></div>
          <div className={cx(style.headerThree, style.partOne)}>
            <h3>人均垃圾量</h3>
            <h3><span>每日</span>
              <AnimationSection>
                <CountUp
                  className={style.number}
                  start={0}
                  end={2.1}
                  decimals={1}
                  useEasing
                  useGrouping
                  duration={2}
                />
              </AnimationSection>
              <span>公斤</span>
            </h3>
          </div>
          <div className={style.garbage}><img src={garbageImg} role="presentation" /></div>
          <div className={cx(style.headerThree, style.partTwo)}>
            <h3>垃圾每日生產量</h3>
            <h3>
              <AnimationSection>
                <CountUp
                  className={style.number}
                  start={0}
                  end={46644291}
                  decimal=","
                  useEasing
                  useGrouping
                  duration={1.5}
                  callback={this.startAnimation}
                />
              </AnimationSection>
              <span>公斤</span>
            </h3>
          </div>
          <div className={style.truck}><img src={truckImg} role="presentation" /></div>
          <Animate
            {...getRankingAnimationData(toAnimate)}
            className={style.rank}
            imgSrc={rankImg}
          />
          <div className={cx(style.desc, style.sec)}><p>若檢視台灣淨灘資料，塑膠袋是十多年來的海廢冠軍，至今已撿起15萬個。但台灣每年平均塑膠袋用量高達180億個，當中有多少已被海洋生物當成食物嚥下，不得而知。</p></div>
          <div className={style.annotation}><span>資料來源：學者Kühn(2015)、學者Jambeck(2015)、愛海小旅行網站</span></div>
        </div>
      </div>
    )
  }

}
export default Area
