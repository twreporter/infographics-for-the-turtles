/* eslint  no-underscore-dangle: ["error", { "allowAfterThis": true }]*/

import CountUp from 'react-countup'
import React, { Component } from 'react'
import Sensor from 'react-visibility-sensor'
import baseStyle from './base.scss'
import style from './area-5.scss'

// image
import bgImg from '../../../static/img/area-5/a5-background.png'
import birdLineImg from '../../../static/img/area-5/a5-albatross-line.png'
import lighterLineImg from '../../../static/img/area-5/a5-lighter-line.png'
import birdImg from '../../../static/img/area-5/a5-albatross.png'
import lighterImg from '../../../static/img/area-5/a5-lighter.png'

class Area extends Component {

  constructor(props) {
    super(props)
    this.state = {
      toAnimate: false,
    }
    this.onEnter = this._onEnter.bind(this)
  }

  componentDidMount() {
    this._isMounted = true
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  _onEnter(isVisible) {
    if (isVisible && this._isMounted) {
      this.setState({
        toAnimate: true,
      })
    }
  }

  render() {
    const { toAnimate } = this.state
    return (
      <div className={baseStyle.area} style={{ backgroundColor: '#204056', marginTop: '-1px' }}>
        <div className={baseStyle.container}>
          <img className={baseStyle.bg} src={bgImg} role="presentation" />
          <div className={style.headerTwo}>
            <h2>食物？廢物？傻傻分不清楚</h2>
          </div>
          <div className={style.desc}>
            <p>日本學者從誤食海廢的信天翁們胃中，找到1,400個打火機。</p>
          </div>
          <div className={style.birdLine}><img src={birdLineImg} role="presentation" /></div>
          <div className={style.bird}><img src={birdImg} role="presentation" /></div>
          <div className={style.lighterLine}><img src={lighterLineImg} role="presentation" /></div>
          <div className={style.lighter}><img src={lighterImg} role="presentation" /></div>
          <Sensor
            active={!toAnimate}
            onChange={this.onEnter}
            partialVisibility
            minTopValue={300}
          >
            <div className={style.animaWords}>
              <span>其中</span>
              { this.state.toAnimate ?
                <CountUp
                  className={style.number}
                  start={0}
                  end={14.1}
                  decimals={1}
                  useEasing
                  useGrouping
                  duration={3}
                  callback={this.toAnimate3}
                /> : null }
              <span style={{ color: '#c59220' }}>%</span>
              <span>的打火機來自台灣</span>
            </div>
          </Sensor>
          <div className={style.annotation}><span>資料來源：日本鹿兒島大學教授藤枝繁</span></div>
        </div>
      </div>
    )
  }

}
export default Area
