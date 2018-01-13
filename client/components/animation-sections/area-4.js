/* eslint  no-underscore-dangle: ["error", { "allowAfterThis": true }]*/

import Cell from 'recharts/lib/component/Cell'
import Pie from 'recharts/lib/polar/Pie'
import PieChart from 'recharts/lib/chart/PieChart'
import React, { Component } from 'react'
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer'
import Sensor from 'react-visibility-sensor'

import baseStyle from './base.scss'
import style from './area-4.scss'
import { Animate } from './base-animate'

// image
import bgImg from '../../../static/img/area-4/a4-background.png'
import text01Img from '../../../static/img/area-4/a4-piechart-1.png'
import text02Img from '../../../static/img/area-4/a4-piechart-2.png'
import text03Img from '../../../static/img/area-4/a4-piechart-3.png'
import text04Img from '../../../static/img/area-4/a4-piechart-4.png'
import text05Img from '../../../static/img/area-4/a4-piechart-5.png'

const textImgs = [text01Img, text02Img, text03Img, text04Img, text05Img]

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
    this._isMounted = undefined
  }

  _onEnter(isVisible) {
    if (this._isMounted && isVisible) {
      this.setState({
        toAnimate: true,
      })
    }
  }

  render() {
    const { toAnimate } = this.state

    const textComps = textImgs.map((img, index) => {
      return (
        <Animate
          key={index}
          imgSrc={img}
          duration={150}
          delay={(index + 1) * 500}
          animation={toAnimate ? { opacity: 1 } : { opacity: 0 }}
          className={style.pieText}
        />
      )
    })

    const COLORS = ['#c59220', '#edb027', '#f3be47', '#f8d380', '#f5e7c6']
    const data = [{ name: '繩與網', value: 27 }, { name: '碎片', value: 23 },
                        { name: '包裝材質', value: 19 }, { name: '其他漁業廢棄物', value: 18 },
                        { name: '微塑膠', value: 13 }]
    return (
      <div className={baseStyle.area} style={{ backgroundColor: '#333333', marginTop: '-1px' }}>
        <div className={baseStyle.container}>
          <img className={baseStyle.bg} src={bgImg} role="presentation" />
          <div className={style.headerTwo}><h2>欺負海洋生物的元兇：塑膠！</h2></div>
          <div className={style.desc}><p>威脅海洋生物生活與性命的海廢中，含有塑膠的製品佔了近9成，如下圖：</p></div>
          <Sensor
            active={!toAnimate}
            onChange={this.onEnter}
            partialVisibility
            minTopValue={300}
          >
            <div className={style.chart}>
              { toAnimate ?
                <ResponsiveContainer
                  width="100%"
                  height="100%"
                >
                  <PieChart
                    width={300}
                    height={300}
                  >
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      startAngle={90}
                      endAngle={-360}
                      outerRadius="100%"
                      isAnimationActive
                      labelLine={false}
                      stroke="#333333"
                    >
                      {
                          data.map((entry, index) => <Cell fill={COLORS[index]} />)
                        }
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                  : null }
              {textComps}
            </div>
          </Sensor>
          <div className={style.annotation}><span>資料來源：生物多樣性公約秘書處（Secretariat of the Convention on Biological Diversity）</span></div>
        </div>
      </div>
    )
  }

}
export default Area
