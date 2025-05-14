import { ReactElement } from 'react';
import styles from './styles.module.scss';
import { IPeriodProps } from './types';
import { usePrevious } from '../../hooks/usePrevious';
import CountUp from 'react-countup';

function Period({ currentPeriod }: IPeriodProps): ReactElement {
  const prevPeriod = usePrevious(currentPeriod);
  return (
    <h1 className={styles.period}>
      {prevPeriod ? (
        <CountUp separator="" start={prevPeriod.start} end={currentPeriod.start} duration={1}>
          {({ countUpRef }) => <span className={styles.start} ref={countUpRef} />}
        </CountUp>
      ) : (
        <span className={styles.start}>{currentPeriod.start}</span>
      )}
      {prevPeriod ? (
        <CountUp separator="" start={prevPeriod.end} end={currentPeriod.end} duration={1}>
          {({ countUpRef }) => <span className={styles.end} ref={countUpRef} />}
        </CountUp>
      ) : (
        <span className={styles.end}>{currentPeriod.end}</span>
      )}
    </h1>
  );
}

export default Period;
