import { ReactElement } from 'react';
import PeriodBlock from './components/periodBlock';

function App(): ReactElement {
  return (
    <main>
      <PeriodBlock uniqueName="first" />
      {/* <PeriodBlock uniqueName="second" /> */}
    </main>
  );
}

export default App;
