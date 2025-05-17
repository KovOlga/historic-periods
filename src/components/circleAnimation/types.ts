import { Dispatch, SetStateAction } from 'react';

export interface TCircleAnimationProps {
  arrLength: number;
  currentPeriod: number;
  currentName: string;
  setCurrentPeriod: Dispatch<SetStateAction<number>>;
}
