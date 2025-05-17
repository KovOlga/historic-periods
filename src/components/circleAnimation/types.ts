import { Dispatch, SetStateAction } from 'react';

export interface TCircleAnimationProps {
  uniqueName: string;
  arrLength: number;
  currentPeriod: number;
  currentName: string;
  setCurrentPeriod: Dispatch<SetStateAction<number>>;
}
