import { ReactElement } from 'react';
import styles from './styles.module.scss';
import { IPeriodProps } from './types';

function Period({ currentPeriod }: IPeriodProps): ReactElement {
  return (
    <h1 className={styles.period}>
      <span className={styles.start}>{currentPeriod.start}</span>
      <span className={styles.end}>{currentPeriod.end}</span>
    </h1>
  );
}

export default Period;
