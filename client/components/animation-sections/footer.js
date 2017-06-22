/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
/* eslint no-unused-vars: ["error", { "args": "none" }] */

import cx from 'classnames';
import React from 'react';
import { FacebookButton, TwitterButton } from 'react-social';

// css
import baseStyle from './base.scss';
import style from './footer.scss';

// image
import donate from '../../../static/img/footer/icon-donation.png';
import logo from '../../../static/img/footer/logo.png';
import cc from '../../../static/img/footer/icon-cc.png';
import github from '../../../static/img/footer/icon-github.png';
import fb from '../../../static/img/footer/icon-share-fb.svg';
import twitter from '../../../static/img/footer/icon-share-twitter.svg';

// CONSTANTS
import CONSTANTS from './constants';

function Area(props) {
  return (
    <div className={baseStyle.area} style={{ backgroundColor: '#2f302f', paddingTop: '34px', marginTop: '-1px' }}>
      <div className={cx(baseStyle.container, style.bg)}>
        <div className={cx(style.share, style.footerText)}>
          <span>分享文章｜</span>
          <FacebookButton url={CONSTANTS.canonicalPath} appId={CONSTANTS.appId}>
            <img src={fb} role="presentation" style={{ marginLeft: 8 }} />
          </FacebookButton>
          <TwitterButton message="塑殺事件簿- 塑膠砌成的海洋生物墳場" url={CONSTANTS.canonicalPath}>
            <img src={twitter} role="presentation" style={{ marginLeft: 18 }} />
          </TwitterButton>
        </div>
        <br />
        <div className={style.footerText}>數據、文字整理 ｜ 鄭涵文、陳貞樺</div>
        <br/>
        <div className={style.footerText}>設計 ｜ 黃禹禛</div>
        <br/>
        <div className={style.footerText}>工程 ｜ 李法賢</div>
        <br/>
        <a href="https://twreporter.backme.tw/cashflow/confirm/3b2f2834-158d-4716-a35a-6f7a507f9142?locale=zh-TW" target="_blank" rel="noopener noreferrer">
          <img className={cx(style.donate, baseStyle['ab-center'])} src={donate} alt="贊助我們" />
        </a>
        <div style={{display: 'table'}}>
          <div style={{display: 'table-cell'}}>
          <a href="https://twreporter.org/" target="_blank" rel="noopener noreferrer">
            <img width="90%" src={logo} alt="報導者 The Reporter" />
          </a>
      </div>
          <div style={{display: 'table-cell', verticalAlign: 'middle'}}>
          <a href="https://github.com/twreporter" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="https://github.com/twreporter" width="25px" style={{verticalAlign: 'middle'}} />
              <span className={style.github}>github.com/twreporter.org</span>
          </a>
      </div>
        </div>
        <div className={cx(style.cc)}>
          <img src={cc} alt="除另有註明，網站內容皆採用創用 CC 姓名標示-非商業性-禁止改作授權條款" />
          <span>除另有註明，網站內容皆採用創用 CC 姓名標示-非商業性-禁止改作授權條款</span>
        </div>
      </div>
    </div>
  );
}
export default Area;
