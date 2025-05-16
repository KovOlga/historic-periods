import { Dispatch, ReactElement, SetStateAction, useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { gsap } from 'gsap';
import clsx from 'clsx';
import './style.css';

const CircleAnimation = ({
  arrLength,
  currentPeriod,
  setCurrentPeriod,
}: {
  arrLength: number;
  currentPeriod: number;
  setCurrentPeriod: Dispatch<SetStateAction<number>>;
}): ReactElement => {
  const circleRef = useRef(null);
  const angle = 360 / arrLength;
  const shift = 150;

  const [currentIndx, setCurrentIndx] = useState(0);

  const rotate = (index: number): void => {
    const rotation = angle * index + shift;
    gsap.to(circleRef.current, {
      rotation: -rotation,
      duration: 0.1,
      ease: 'none',
      transformOrigin: '50% 50%',
    });
  };

  const handleClick = (index: number): void => {
    setCurrentPeriod(index);
    rotate(index);
    setCurrentIndx(index);
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
