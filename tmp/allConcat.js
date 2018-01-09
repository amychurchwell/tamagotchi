import { Tamagotchi } from './../js/tamagotchi.js';

$(document).ready(function(){
  let name = "sonic";
  let foodLevel= 10;
  let patienceLevel = 10;
  let tamagotchi = new Tamagotchi(name, foodLevel, patienceLevel);
  let sleepBar = [];
  let hungerBar = [];
  tamagotchi.setPatience();
  tamagotchi.setHunger();

  $('#button-feed').click(function(){
    tamagotchi.feed();
    return console.log(tamagotchi.foodLevel);
  });

  $('#button-sleep').click(function(){
    tamagotchi.sleep();
    $('#sleep-progress').append();
    return console.log(tamagotchi.patienceLevel);
  });
});
