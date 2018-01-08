import { Tamagotchi } from './../js/tamagotchi.js';

describe('Tamagotchi', function(){
  let tamagotchi = new Tamagotchi("Fuzzy");

  beforeEach(function() {
    jasmine.clock().install();
    tamagotchi.setHunger();
  });

  afterEach(function() {
  jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function() {
    expect(tamagotchi.name).toEqual("Fuzzy");
    expect(tamagotchi.foodLevel).toEqual(10);
  });

  it('should have a food level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(tamagotchi.foodLevel).toEqual(7);
  });

  it('should get very hungry if the food level drops below zero', function() {
    tamagotchi.foodLevel = 0;
    expect(tamagotchi.didYouGetEaten()).toEqual(true);
  });

  it('should get very hungry if 10 seconds pass without feeding', function() {
    jasmine.clock().tick(10001);
    expect(tamagotchi.didYouGetEaten()).toEqual(true);
  });

  it('should have a food level of ten if it is fed', function() {
    jasmine.clock().tick(9001);
    tamagotchi.feed();
    expect(tamagotchi.foodLevel).toEqual(10);
  });
});
