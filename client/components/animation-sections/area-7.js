/* eslint  no-underscore-dangle: ["error", { "allowAfterThis": true }]*/

import React, { Component } from 'react'
import Sensor from 'react-visibility-sensor'
import style from './area-7.scss'

import { AnimateWithMask } from './base-animate'

// image
import chartImg from '../../../static/img/area-7/a7-chart.png'
import chartMaskImg from '../../../static/img/area-7/a7-chart-mask.png'

class Area extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toAnimate: false,
    }
    this.onEnter = (isVisible) => {
      if (this._isMounted && isVisible) {
        this.setState({
          toAnimate: true,
        })
      }
    }
  }

  componentDidMount() {
    this._isMounted = true
  }

  componentWillUnmount() {
    this._isMounted = undefined
  }

  render() {
    const { toAnimate } = this.state
    return (
      <div className={style.area7} style={{ marginTop: '-1px' }}>
        <div style={{ maxWidth: '540px', margin: '0 auto' }}>
          <h2 className={style.title}>受害海洋生物持續增加</h2>
          <h3 className={style.subtitle}>不同動物品種被海廢影響的比例</h3>
          <Sensor
            active={!toAnimate}
            onChange={this.onEnter}
            partialVisibility
            minTopValue={300}
          >
            <div>
              <AnimateWithMask
                animation={{
                  mask: toAnimate ? { opacity: 1, left: '0%' } : { opacity: 1, left: '-100%' },
                  img: toAnimate ? { opacity: 1, left: '0%' } : { opacity: 1, left: '100%' },
                }}
                delay={500}
                duration={1000}
                bgImgSrc={chartMaskImg}
                imgSrc={chartImg}
                style={{
                  img: style.chart,
                  mask: style.mask,
                }}
              />
            </div>
          </Sensor>
          <p className={style.desc}>雖然目前無法統計受海廢影響的海洋動物數量，但受害的海洋動物品種比例逐漸增加。海洋無國界，海廢可能影響任何海洋生物。截至 2016 年，被海廢影響的海洋生物已達近 800 種。</p>
          <div className={style.annotation}><span>資料來源：學者Kuhn(2015)、生物多樣性公約秘書處</span></div>
        </div>
      </div>
    )
  }

}
export default Area
