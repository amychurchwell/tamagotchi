import { Tamagotchi } from './../js/tamagotchi.js';

$(document).ready(function(){
  let name = "sonic";
  let foodLevel= 10;
  let sleepLevel = 10;
  let tamagotchi = new Tamagotchi(name, foodLevel, sleepLevel);

  tamagotchi.setSleep();
  tamagotchi.setHunger();

  console.log(tamagotchi.sleepLevel);

  $('#button-feed').click(function(){
    tamagotchi.feed();
    return console.log(tamagotchi.foodLevel);
  });
  $('#button-sleep').click(function(){
    tamagotchi.sleep();
    return console.log(tamagotchi.sleepLevel);
  });


});
