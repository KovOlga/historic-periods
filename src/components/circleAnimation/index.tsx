import { ReactElement, useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { gsap } from 'gsap';
import clsx from 'clsx';
import './style.css';
import { TCircleAnimationProps } from './types';

const CircleAnimation = (props: TCircleAnimationProps): ReactElement => {
  const { arrLength, currentPeriod, currentName, setCurrentPeriod } = props;
  const circleRef = useRef(null);
  const angle = 360 / arrLength;
  const shift = 150;

  const [currentIndx, setCurrentIndx] = useState(0);
  const [currentNameState, setCurrentNameState] = useState('');

  const rotate = (index: number): void => {
    const rotation = angle * index + shift;
    gsap.to(circleRef.current, {
      rotation: -rotation,
      duration: 0.5,
      ease: 'none',
      transformOrigin: '50% 50%',
      onStart: () => {
        setCurrentNameState('');
      },
      onComplete: () => {
        setCurrentIndx(index);
        setCurrentNameState(currentName);
      },
    });
  };

  const handleClick = (index: number): void => {
    setCurrentPeriod(index);
  };

  useEffect(() => {
    rotate(currentPeriod);
  }, [currentPeriod]);

  return (
    <div className={styles.circleContainer}>
      <div className={styles.circle} ref={circleRef}>
        {Array.from({ length: arrLength }, (_, index) => {
          return (
            <div
              key={index}
              className={clsx(styles.number, {
                [styles.number__active]: index === currentPeriod,
                [styles.number__inactive]: index !== currentPeriod,
              })}
              style={{
                transform: `rotate(${angle * index}deg) translateY(270px)`,
              }}
              onClick={() => handleClick(index)}
            >
              {index === currentIndx && (
                <p
                  style={{
                    transform: `rotate(${shift - (index - currentIndx) * angle}deg) `,
                  }}
                  className={styles.name}
                >
                  {currentNameState}
                </p>
              )}
              <span
                style={{
                  transform: `rotate(${shift - (index - currentIndx) * angle}deg) `,
                }}
                className={clsx(styles.circle_number, { opacity: index === currentPeriod })}
              >
                {index + 1}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CircleAnimation;
