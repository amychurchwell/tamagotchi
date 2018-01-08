export class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.sleepLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  didYouGetEaten() {
   if (this.foodLevel > 0) {
     return false;
   } else {
     return true;
   }
 }

 feed() {
   this.foodLevel = 10;
 }

 setSleep() {
   setInterval(() => {
     this.sleepLevel--;
   }, 1000);
 }

 didYouGetSlapped() {
   if (this.sleepLevel > 0) {
     return false;
   } else {
     return true;
   }
 }

 sleep() {
   this.sleepLevel = 10;
 }
}
