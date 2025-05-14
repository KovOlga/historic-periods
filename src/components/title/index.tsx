import { ReactElement } from 'react';
import styles from './styles.module.scss';

function Title(): ReactElement {
  return <h2 className={styles.title}>Исторические даты</h2>;
}

export default Title;
