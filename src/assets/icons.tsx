import { ReactElement } from 'react';
import styles from './styles.module.scss';

export function LeftArrowIcon({ disabled, color }: { disabled?: boolean; color: string }): ReactElement {
  return (
    <svg className={styles.arrow} viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.49988 0.750001L2.24988 7L8.49988 13.25" stroke={disabled ? '#42567a80' : color} strokeWidth="2" />
    </svg>
  );
}

export function RightArrowIcon({ disabled, color }: { disabled?: boolean; color: string }): ReactElement {
  return (
    <svg className={styles.arrow} viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.50012 0.750001L7.75012 7L1.50012 13.25" stroke={disabled ? '#42567a80' : color} strokeWidth="2" />
    </svg>
  );
}
