import { Tamagotchi } from 'tamagotchi.js';

export class Progress extends Tamagotchi {
  constructor(foodStatus, sleepStatus) {
    super(foodLevel, sleepLevel);
    this.foodStatus = foodLevel;
    this.sleepStatus = sleepLevel;
  }
}
