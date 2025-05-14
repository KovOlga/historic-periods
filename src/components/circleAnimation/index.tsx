import { Dispatch, ReactElement, SetStateAction, useRef } from 'react';
import styles from './styles.module.scss';
import { gsap } from 'gsap';
import clsx from 'clsx';

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

  const handleClick = (index: number): void => {
    setCurrentPeriod(index);
    const rotation = angle * index - 210;
    gsap.to(circleRef.current, {
      rotation: -rotation,
      duration: 0.1,
      ease: 'none',
      transformOrigin: '50% 50%',
    });
  };

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
              {index === currentPeriod && <span>{index + 1}</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CircleAnimation;
