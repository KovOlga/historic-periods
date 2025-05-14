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

  const handleChangePeriod = (type: 'asc' | 'desc'): void => {
    switch (type) {
      case 'asc': {
        setCurrentPeriod((prev) => prev + 1);
        break;
      }
      case 'desc': {
        setCurrentPeriod((prev) => prev - 1);
        break;
      }
    }
  };
  return (
    <main className={styles.container}>
      <Title />
      <Period currentPeriod={mockData[currentPeriod].period} />
      <div className={styles.controls}>
        <p className={styles.block}>
          {formatPeriod(currentPeriod + 1)}/{formatPeriod(mockData.length)}
        </p>
        <div className={styles.btns}>
          <button onClick={() => handleChangePeriod('desc')} disabled={!currentPeriod} className={styles.btn}>
            <LeftArrowIcon disabled={!currentPeriod} />
          </button>
          <button
            onClick={() => handleChangePeriod('asc')}
            disabled={currentPeriod === mockData.length - 1}
            className={styles.btn}
          >
            <RightArrowIcon disabled={currentPeriod === mockData.length - 1} />
          </button>
        </div>
      </div>
      <Slider datesArr={mockData[currentPeriod].dates} />
    </main>
  );
}

export default App;
