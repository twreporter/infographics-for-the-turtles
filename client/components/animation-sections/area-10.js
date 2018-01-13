/* eslint  no-underscore-dangle: ["error", { "allowAfterThis": true }]*/

import React, { PureComponent } from 'react'
import cx from 'classnames'
import style from './area-10.scss'

import img from '../../../static/img/area-10/a10-link.png'

class Area extends PureComponent {
  render() {
    return (
      <div className={style.area10}>
        <div className={style.container}>
          <h2 className={style.title}>每減少一個垃圾，就可能少一個受害者</h2>
          <p className={cx(style.desc, style.first)}>你買早餐的塑膠袋，很可能在未來某天，變成阻塞海龜腸胃、甚至致死的最後一根稻草。</p>
          <p className={style.desc}>雖然要解決海廢問題，源頭減量及更完善的廢棄物回收和再利用機制仍扮演關鍵角色，但這些垃圾的背後，其實都是人類的生活痕跡。垃圾減量的生活也許不容易，但一個轉念，也許就能換回一條生命。</p>
          <p className={style.link}><a href="https://www.twreporter.org/a/marine-debris-seaturtle-tomb" target="_blank" rel="noopener noreferrer"><img src={img} role="presentation" /><span>失控的海洋廢棄物——塑膠砌成的海龜墳場</span></a></p>
          <p className={style.link}><a href="https://www.twreporter.org/a/taiwan-ocean-waste" target="_blank" rel="noopener noreferrer"><img src={img} role="presentation" /><span>無所不在的海洋微塑膠入侵記</span></a></p>
        </div>
      </div>
    )
  }

}
export default Area
