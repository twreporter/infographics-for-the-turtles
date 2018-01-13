/* eslint  no-underscore-dangle: ["error", { "allowAfterThis": true }]*/

import React, { Component } from 'react'
import Waypoint from 'react-waypoint'
import { VelocityComponent } from 'velocity-react'
import get from 'lodash/get'

import baseStyle from './base.scss'
import style from './opening.scss'
// image
import bgImg from '../../../static/img/opening/o-background.png'
import turtelImg from '../../../static/img/opening/o-turtle.png'
import turtelGarbageImg from '../../../static/img/opening/o-turtle-garbage.png'
import sea01Img from '../../../static/img/opening/o-sea.png'
import sea02Img from '../../../static/img/opening/o-sea-5000.png'
import titleImg from '../../../static/img/opening/o-topic.png'
import logoImg from '../../../static/img/opening/logo.svg'

const _ = {
  get,
}

class Area extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animaStage: 0,
      toAnimateTurtle: false,
      isAnimationFinished: false,
    }
    this.startAnimaStage1 = this.startAnimaStage.bind(this, 1)
    this.startAnimaStage2 = this.startAnimaStage.bind(this, 2, true)
    this.startAnimaStage3 = this.startAnimaStage.bind(this, 3, true)
    this.startAnimateTurtle = this.startAnimateTurtle.bind(this)
    this.onEnter = this.onEnter.bind(this)
    this.onLeave = this.onLeave.bind(this)
  }

  onEnter() {
    this.startAnimateTurtle()
    if (!this.state.isAnimationFinished) {
      setTimeout(() => this.startAnimaStage1(), 1500)
    }
  }

  onLeave() {
    this.setState({
      isAnimationFinished: true,
    })
    clearInterval(this.interval)
  }

  startAnimateTurtle() {
    const that = this
    this.interval = setInterval(() => {
      that.setState({
        toAnimateTurtle: !that.state.toAnimateTurtle,
      })
    }, 1000)
  }

  startAnimaStage(stage) {
    this.setState({
      animaStage: stage,
    })
  }

  render() {
    const { animaStage, toAnimateTurtle } = this.state

    // sea waves upside and downside
    const animaSequence = [{
      animation: {
        top: 0,
        opacity: 1,
      },
      duration: 1500,
      delay: 0,
      easing: 'ease',
      complete: this.startAnimaStage2,
    }, {
      animation: {
        top: '-200px',
        opacity: 0.65,
      },
      duration: 2000,
      delay: 300,
      easing: 'ease',
      complete: this.startAnimaStage3,
    }]

    return (
      <Waypoint
        key="opening"
        onEnter={this.onEnter}
        onLeave={this.onLeave}
      >
        <div className={style.area}>
          <div className={baseStyle.container}>
            <img className={style.bg} src={bgImg} role="presentation" />
            <VelocityComponent
              animation={_.get(animaSequence, [animaStage - 1, 'animation'])}
              duration={_.get(animaSequence, [animaStage - 1, 'duration'])}
              delay={_.get(animaSequence, [animaStage - 1, 'delay'])}
              complete={_.get(animaSequence, [animaStage - 1, 'complete'])}
            >
              <div className={style.sea} style={{ zIndex: 1, top: '-200px' }} >
                <img className={baseStyle.mobile} src={sea01Img} role="presentation" />
                <img className={baseStyle['non-mobile']} src={sea02Img} role="presentation" />
              </div>
            </VelocityComponent>
            <a href="https://www.twreporter.org" target="_blank" rel="noopener noreferrer"><img src={logoImg} alt="報導者 The Reporter" className={style.logo} /></a>
            <VelocityComponent
              animation={animaStage > 1 ? { opacity: 1 } : { opacity: 0 }}
              duration={1000}
              delay={1000}
            >
              <div className={style.title}>
                <h1 className={baseStyle['seo-hidden']}>塑殺事件簿-塑膠砌成的海洋生物墳場</h1>
                <img src={titleImg} alt="塑殺事件簿-塑膠砌成的海洋生物墳場" />
              </div>
            </VelocityComponent>
            <div className={style.turtle}>
              <img style={{ display: toAnimateTurtle ? 'none' : 'block' }} src={turtelImg} role="presentation" />
              <img style={{ display: toAnimateTurtle ? 'block' : 'none' }} src={turtelGarbageImg} role="presentation" />
            </div>
            <div className={style.desc}>
              <p>奄奄一息的年輕海龜躺在沙灘上，牠營養不良，卻又吃不了任何食物，因為牠的胃裡塞滿了人類產生的廢棄物。</p>
              <br />
              <p>塑膠袋、吸管、魚線、保麗龍...這些垃圾，若沒被海龜拉出來，就會累積在胃裡，讓牠無法吸收營養，或因腸道阻塞敗血而死。</p>
            </div>
          </div>
        </div>
      </Waypoint>
    )
  }
}

export default Area
