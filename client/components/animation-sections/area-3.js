/* eslint  no-underscore-dangle: ["error", { "allowAfterThis": true }]*/

import React, { Component, PropTypes } from 'react';
import Sensor from 'react-visibility-sensor'
// lodash
import map from 'lodash/map';
import cx from 'classnames';
import { VelocityComponent, velocityHelpers } from 'velocity-react';
import baseStyle from './base.scss';
import style from './area-3.scss';

// image
import bgImg from '../../../static/img/area-3/a3-background.png';
import garbageImg from '../../../static/img/area-3/a3-garbage.png';
import garbageBgImg from '../../../static/img/area-3/a3-garbage-bg.png'
import garbageBg5000Img from '../../../static/img/area-3/a3-garbage-bg-5000.png'
import strawImg from '../../../static/img/area-3/a3-straw-1383.png';
import strawMaskImg from '../../../static/img/area-3/a3-straw-1383-mask.png'
import trenchImg from '../../../static/img/area-3/a3-trench.png';
import trench5000Img from '../../../static/img/area-3/a3-trench-5000.png';

import { AnimateWithMask } from './base-animate'

const _ = {
  map,
};

const baseHeight = 1384
const strawHeight = 54
const proportion = (strawHeight / baseHeight * 100)

class Straw extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animationStage: 0
    };
    this.setAnimationStage1 = this._setAnimationStage.bind(this, 1);
    this.setAnimationStage2 = this._setAnimationStage.bind(this, 2);
  }

  _setAnimationStage(target) {
    const animationStage = this.state.animationStage
    if (target > animationStage) {
      this.setState({
        animationStage: target
      })
    }
  }

  render() {
    const { animationStage } = this.state
    const baseHeight = 1384
    const maskTop = [ (750/1384*100) - 100, 0]
    return (
      <AnimateWithMask
        animation={{
          mask: animationStage ? { opacity: 1, top: maskTop[animationStage-1] + '%'} : { opacity: 1, top: '-100%' },
          img: animationStage ? { opacity: 1, top: '0%' } : { opacity: 1, top: '100%' }
        }}
        bgImgSrc={strawMaskImg}
        imgSrc={strawImg}
        duration={3000}
        delay={0}
        style={{
          img: style.straw,
          mask: style.mask,
        }}
      />
    )
  }
}

class Area extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._isMounted = true
  }

  componentWillUnmount() {
    this._isMounted = undefined
    this.strawNode = undefined
  }

  startAnimation(target, isVisible) {
    if (isVisible && this._isMounted) {
      this.strawNode[`setAnimationStage${target}`]()
    }
  }

  render() {
    return (
        <div className={baseStyle.area} style={{ backgroundColor: '#204055', marginTop: '-1px' }}>
          <div className={baseStyle.container}>
            <img className={baseStyle.bg} src={bgImg} role="presentation" />
            <div className={style.garbageBg}>
              <img className={baseStyle.mobile} src={garbageBgImg} role="presentation" />
              <img className={baseStyle['non-mobile']} src={garbageBg5000Img} role="presentation" />
             </div>
            <div className={style.garbage}><img src={garbageImg} role="presentation" /></div>
            <div className={cx(style.desc, style.partOne)}><p>但淨灘的8千多噸，只是冰山一角......</p></div>
            <Sensor
              onChange={this.startAnimation.bind(this,1)}
              partialVisibility
              minTopValue={300}
            >
              <div className={cx(style.desc, style.partTwo)}><p>學者推估，一年恐有1千2百70萬噸塑膠垃圾流入海中；也有學者估算，海中載浮載沉的海廢，高達5.25兆件。</p></div>
            </Sensor>
            <Sensor
              onChange={this.startAnimation.bind(this,2)}
              partialVisibility
              minTopValue={300}
            >
              <div className={cx(style.desc, style.partThree)}><p>用淨灘清出的吸管接龍，可來回全球最深的馬里亞納海溝3趟！</p></div>
            </Sensor>
            <Straw
              ref={(strawNode) => {this.strawNode = strawNode}}
            />
            <div className={style.trench}>
              <img className={baseStyle.mobile} src={trenchImg} role="presentation" />
              <img className={baseStyle['non-mobile']} src={trench5000Img} role="presentation" />
            </div>
          </div>
        </div>
    );
  }

}
export default Area;
