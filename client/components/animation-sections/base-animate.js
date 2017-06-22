import React, { PropTypes } from 'react';
import { VelocityComponent } from 'velocity-react';

function Animate({ animation, className,
  children, delay, duration,
  easing, imgAlt, imgSrc, onAnimationFinish }) {
  return (
    <VelocityComponent
      animation={animation}
      duration={duration}
      delay={delay}
      complete={onAnimationFinish}
      easing={easing}
    >
      <div className={className}>
        <img src={imgSrc} alt={imgAlt} role="presentation" />
        { children }
      </div>
    </VelocityComponent>
  );
}

Animate.propTypes = {
  animation: PropTypes.any,
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
  delay: PropTypes.number,
  duration: PropTypes.number,
  easing: PropTypes.any,
  imgAlt: PropTypes.string,
  imgSrc: PropTypes.string,
  onAnimationFinish: PropTypes.func,
};

Animate.defaultTypes = {
  animation: undefined,
  className: '',
  delay: 500,
  duration: 500,
  easing: '',
  imgAlt: '',
  imgSrc: '',
  onAnimationFinish: undefined,
};

function AnimateWithMask(props) {
  const { animation, bgImgSrc, delay, duration, easing, imgSrc, style, onAnimationFinish } = props;
  return (
    <div className={style.img}>
      <img src={bgImgSrc} role="presentation" />
      <VelocityComponent animation={animation.mask} duration={duration} delay={delay}>
        <div className={style.mask}>
          <VelocityComponent
            animation={animation.img}
            duration={duration}
            delay={delay}
            complete={onAnimationFinish}
            easing={easing}
          >
            <img src={imgSrc} role="presentation" />
          </VelocityComponent>
        </div>
      </VelocityComponent>
    </div>
  );
}

AnimateWithMask.propTypes = {
  animation: PropTypes.shape({
    img: PropTypes.any,
    mask: PropTypes.any,
  }),
  bgImgSrc: PropTypes.string,
  delay: PropTypes.number,
  duration: PropTypes.number,
  easing: PropTypes.any,
  imgSrc: PropTypes.string,
  onAnimationFinish: PropTypes.func,
  style: PropTypes.shape({
    img: PropTypes.string,
    mask: PropTypes.string,
  }),
};

AnimateWithMask.defaultTypes = {
  animation: {
    img: undefined,
    mask: undefined,
  },
  bgImgSrc: '',
  delay: 500,
  duration: 500,
  easing: '',
  imgSrc: '',
  onAnimationFinish: undefined,
  style: {
    img: '',
    mask: '',
  },
};

export { Animate, AnimateWithMask };
