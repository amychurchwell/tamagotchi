export class Tamagotchi {

  constructor(name, foodLevel, patienceLevel) {
    this.name = name;
    this.foodLevel = 10;
    this.patienceLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      if (this.foodLevel > 0) {
        this.foodLevel--;
        console.log(this.foodLevel);
        return false;
      } else {
        return true;
      }
    }, 5000);

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

 setPatience() {
   setInterval(() => {
     if (this.patienceLevel > 0) {
       this.patienceLevel--;
       console.log(this.patienceLevel);
       return false;
     } else {
       return true;
     }
   }, 5000);
 }

 didYouGetSlapped() {
   if (this.patienceLevel > 0) {
     return false;
   } else {
     return true;
   }
 }

 run() {
   this.patienceLevel = 10;
 }
}
