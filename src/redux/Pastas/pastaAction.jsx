import { BUY_PASTAS, EAT_PASTAS } from './pastaTypes';

export const buyPastas = () => {
  return {
    type: BUY_PASTAS
  };
};

export const eatPastas = () => {
  return {
    type: EAT_PASTAS
  }
}