/* eslint  no-underscore-dangle: ["error", { "allowAfterThis": true }]*/

import React, { Component } from 'react'
import get from 'lodash/get'

import baseStyle from './base.scss'
import style from './area-9.scss'

// image
import garbageImg from '../../../static/img/area-9/a9-garbage.png'
import garbage5000Img from '../../../static/img/area-9/a9-garbage-5000.png'
import coralImg from '../../../static/img/area-9/a9-coral.png'
import coral5000Img from '../../../static/img/area-9/a9-coral-5000.png'

const _ = {
  get,
}

let ScrollMagic

if (process.env.BROWSER) {
  ScrollMagic = require('ScrollMagic') // eslint-disable-line
  require('ScrollMagicIndicator') // eslint-disable-line
}

class Area extends Component {

  componentDidMount() {
    const controller = new ScrollMagic.Controller()
    const windowWidth = _.get(window, 'innerWidth', 540)
    const duration = windowWidth > 540 ? 700 : 500

		// build scene
    new ScrollMagic.Scene({ triggerElement: '#trigger', duration })
						.setPin('#garbage')
    // .addIndicators({name: "1 (duration: 450)"}) // add indicators (requires plugin)
						.addTo(controller)
  }

  render() {
    return (
      <div className={baseStyle.area} style={{ backgroundColor: '#204056', position: 'relative', marginTop: '-1px' }}>
        <div className={style.onWater}>
          <div className={style.headerTwo}>
            <h2>海廢最終去哪兒？</h2>
            <p>然而，沙灘上、海面上所見，都只是海廢一小部分，更多數不盡的海廢......</p>
          </div>
        </div>
        <div className={baseStyle.container}>
          <div id="garbage" className={style.marginGarbage}>
            <div className={style.garbage}>
              <img className={baseStyle.mobile} src={garbageImg} role="presentation" />
              <img className={baseStyle['non-mobile']} src={garbage5000Img} role="presentation" />
            </div>
          </div>
          <div className={style.text01}>
            <p>都沉在海底。
              這些漁網、垃圾遮蔽光線，讓珊瑚、海草缺氧，造成大規模「海床窒息」。
            </p>
          </div>
        </div>
        <div className={baseStyle.container}>
          <div className={style.text01} style={{ top: '-200%' }}>
            <p>
              有研究指出，夏威夷的歐胡島，65%的珊瑚被漁網覆蓋，其中8成已白化死亡。
            </p>
          </div>
          <div className={style.coral}>
            <img className={baseStyle.mobile} src={coralImg} role="presentation" />
            <img className={baseStyle['non-mobile']} src={coral5000Img} role="presentation" />
          </div>
          <div className={style.annotation}><span>資料來源：學者Kühn(2015)</span></div>
        </div>
        <div
          id="trigger" style={{
            position: 'absolute',
            top: '40%',
          }}
        />
      </div>
    )
  }

}
export default Area
