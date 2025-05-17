import { ReactElement, useState } from 'react';
import CircleAnimation from '../circleAnimation';
import Title from '../title';
import Period from '../period';
import { formatPeriod } from '../../utils/format';
import { LeftArrowIcon, RightArrowIcon } from '../../assets/icons';
import Slider from '../slider';
import styles from './styles.module.scss';
import { mockData } from '../../utils/mock';
import { IPeriodBlockProps } from './types';

function PeriodBlock(props: IPeriodBlockProps): ReactElement {
  const { uniqueName } = props;
  const [currentPeriod, setCurrentPeriod] = useState(0);

  const handleChangePeriod = (type: 'incr' | 'decr'): void => {
    switch (type) {
      case 'incr': {
        setCurrentPeriod((prev) => prev + 1);
        break;
      }
      case 'decr': {
        setCurrentPeriod((prev) => prev - 1);
        break;
      }
    }
  };
  return (
    <div className={styles.main}>
      <CircleAnimation
        uniqueName={uniqueName}
        currentName={mockData[currentPeriod].name}
        setCurrentPeriod={setCurrentPeriod}
        currentPeriod={currentPeriod}
        arrLength={mockData.length}
      />
      <Title />
      <Period currentPeriod={mockData[currentPeriod].period} />
      <div className={styles.main__x_mobile} />
      <div className={styles.swiper}>
        <div className={styles.controls}>
          <p className={styles.controls__period}>
            {formatPeriod(currentPeriod + 1)}/{formatPeriod(mockData.length)}
          </p>
          <div className={styles.btns}>
            <button onClick={() => handleChangePeriod('decr')} disabled={!currentPeriod} className={styles.btns__item}>
              <LeftArrowIcon color="#42567A" disabled={!currentPeriod} />
            </button>
            <button
              onClick={() => handleChangePeriod('incr')}
              disabled={currentPeriod === mockData.length - 1}
              className={styles.btns__item}
            >
              <RightArrowIcon color="#42567A" disabled={currentPeriod === mockData.length - 1} />
            </button>
          </div>
        </div>
        <Slider datesArr={mockData[currentPeriod].dates} />
      </div>
      <div className={styles.main__x} />
      <div className={styles.main__y} />
      <div className={styles.main__circle} />
      <div className={styles.main__left} />
    </div>
  );
}

export default PeriodBlock;
