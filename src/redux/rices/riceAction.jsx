import { BUY_RICES, EAT_RICES } from './riceTypes';

export const buyRices = () => {
  return {
    type: BUY_RICES
  };
};

export const eatRices = () => {
  return {
    type: EAT_RICES
  }
}