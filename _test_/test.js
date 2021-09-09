import { GalacticAge } from '../src/age.js';
import { LifeExpectancy } from '../src/age.js';
import { GalacticYearsLeft } from '../src/age.js';


describe('GalacticAge', () => {

  let galacticAge;

  beforeEach(() => {
    galacticAge = new GalacticAge(30);
  });

  test('should correctly create a galacticAge object with age', () => {
    expect(galacticAge.age).toEqual(30);
  });

  test('should correctly calculate age as a Mercury age', () => {
    expect(galacticAge.mercuryYears()).toEqual(125);
  });

  test('should correctly calculate age as a Venus age', () => {
    expect(galacticAge.venusYears()).toEqual(48);
  });

  test('should correctly calculate age as a Mars age', () => {
    expect(galacticAge.marsYears()).toEqual(16);
  });

  test('should correctly calculate age as a Jupiter age', () => {
    expect(galacticAge.jupiterYears()).toEqual(3);
  });

});


describe('LifeExpectancy', () => {

  test('should correctly create lifeExpectancy object', () => {
    let lifeExpectancy = new LifeExpectancy();
    expect(lifeExpectancy.avarageLife).toEqual(78);

  });


});


describe('GalacticYearsLeft', () => {

  let galacticYearsLeft;

  beforeEach(() => {
    galacticYearsLeft = new GalacticYearsLeft(30, 48);
  });

  test('should correctly create GalaticYearsLeft object with two properties', () => {
    expect(galacticYearsLeft.age).toEqual(30);
    expect(galacticYearsLeft.yearsLeft).toEqual(48);
  });

  test('should correctly determines how many years user left', () => {
    expect(galacticYearsLeft.checkYearsLeft()).toEqual(48);
      });

  test('should correctly determine how many Mercury years left', () => {
    expect(galacticYearsLeft.mercuryYearsLeft()).toEqual(200);
  });

  test('should correctly determine how many Venus years left', () => {
    expect(galacticYearsLeft.venusYearsLeft()).toEqual(77);
  });

  test('should correctly determine how many Mars years left', () => {
    expect(galacticYearsLeft.marsYearsLeft()).toEqual(26);
  });

  test('should correctly determine how many Jupiter years left', () => {
    expect(galacticYearsLeft.jupiterYearsLeft()).toEqual(4);
  });

});