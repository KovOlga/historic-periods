import { ReactElement, useState } from 'react';
import Title from './components/title';
import styles from './styles.module.scss';
import Period from './components/period';
import { mockData } from './utils/mock';
import Slider from './components/slider';
import { LeftArrowIcon, RightArrowIcon } from './assets/icons';
import { formatPeriod } from './utils/format';

function App(): ReactElement {
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
    <main className={styles.main}>
      <div className={styles.main__x} />
      <div className={styles.main__y} />
      <Title />
      <Period currentPeriod={mockData[currentPeriod].period} />
      <div className={styles.controls}>
        <p className={styles.block}>
          {formatPeriod(currentPeriod + 1)}/{formatPeriod(mockData.length)}
        </p>
        <div className={styles.btns}>
          <button onClick={() => handleChangePeriod('decr')} disabled={!currentPeriod} className={styles.btn}>
            <LeftArrowIcon color="#42567A" disabled={!currentPeriod} />
          </button>
          <button
            onClick={() => handleChangePeriod('incr')}
            disabled={currentPeriod === mockData.length - 1}
            className={styles.btn}
          >
            <RightArrowIcon color="#42567A" disabled={currentPeriod === mockData.length - 1} />
          </button>
        </div>
      </div>
      <Slider datesArr={mockData[currentPeriod].dates} />
    </main>
  );
}

export default App;
