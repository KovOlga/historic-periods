import { ReactElement } from 'react';
import styles from './styles.module.scss';

function Title(): ReactElement {
  return <h1 className={styles.title}>Исторические даты</h1>;
}

export default Title;
