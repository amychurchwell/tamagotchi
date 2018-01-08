import { Tamagotchi } from './../js/tamagotchi.js';

describe('Tamagotchi', function(){
  let tamagotchi = new Tamagotchi("Fuzzy");

  beforeEach(function() {
    jasmine.clock().install();
    tamagotchi.setHunger();
    tamagotchi.setSleep();
  });

  afterEach(function() {
  jasmine.clock().uninstall();
  });

  it('should have a name and a food and sleep level of 10 when it is created', function() {
    expect(tamagotchi.name).toEqual("Fuzzy");
    expect(tamagotchi.foodLevel).toEqual(10);
    expect(tamagotchi.sleepLevel).toEqual(10);
  });

  it('should have a food and sleep level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(tamagotchi.foodLevel).toEqual(7);
    expect(tamagotchi.sleepLevel).toEqual(7);
  });

  it('should get very upset if the food and sleep levels drop below zero', function() {
    tamagotchi.foodLevel = 0;
    expect(tamagotchi.didYouGetEaten()).toEqual(true);
    tamagotchi.sleepLevel = 0;
    expect(tamagotchi.didYouGetSlapped()).toEqual(true);
  });

  it('should get very upset if 10 seconds pass without feeding or sleeping', function() {
    jasmine.clock().tick(10001);
    expect(tamagotchi.didYouGetEaten()).toEqual(true);
    tamagotchi.sleepLevel = 0;
    expect(tamagotchi.didYouGetSlapped()).toEqual(true);
  });

  it('should have a food level of ten if it is fed and a sleep level of ten if it naps', function() {
    jasmine.clock().tick(9001);
    tamagotchi.feed();
    expect(tamagotchi.foodLevel).toEqual(10);
    tamagotchi.sleep();
    expect(tamagotchi.sleepLevel).toEqual(10);
  });
});
