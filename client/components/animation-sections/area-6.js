/* eslint  no-underscore-dangle: ["error", { "allowAfterThis": true }]*/

import React, { PureComponent } from 'react'
import style from './area-6.scss'

// image
import entangleImg from '../../../static/img/area-6/a6-entanglement.png'
import ingetionImg from '../../../static/img/area-6/a6-ingetion.png'

class Area extends PureComponent {

  render() {
    return (
      <div className={style.area6} style={{ marginTop: '-1px' }}>
        <div style={{ maxWidth: '540px', margin: '0 auto' }}>
          <h2 className={style.title}>海洋生物緩慢且痛苦的死法</h2>
          <h3 className={style.subtitle}>纏繞（entanglement）</h3>
          <p className={style.desc}>恐致海洋生物無法正常生活、受傷、或因無法換氣致死</p>
          <div className={style.entangle}>
            <img src={entangleImg} alt="漁網纏繞海龜" />
          </div>
          <h3 className={style.subtitle}>食入（ingetion）</h3>
          <p className={style.desc}>恐影響海洋生物的營養吸收、撐死，甚至阻塞腸道而死</p>

          <div className={style.ingetion}>
            <img src={ingetionImg} alt="海洋生物腸道堆滿垃圾" />
          </div>
        </div>
      </div>
    )
  }

}
export default Area
