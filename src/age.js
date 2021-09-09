//Business Logic

export class GalacticAge {
  constructor(age) {
    this.age = age;
  }

  mercuryYears() {
    return Math.round(this.age / .24);
  }

  venusYears() {
    return Math.round(this.age / .62);
  }

  marsYears() {
    return Math.round(this.age / 1.88);
  }

  jupiterYears() {
    return Math.round(this.age /= 11.86);
  }

}

export class LifeExpectancy {
  constructor() {
    this.avarageLife = 78;
  }
}

export class GalacticYearsLeft {
  constructor(age, yearsLeft) {
    this.age = age;
    this.yearsLeft = yearsLeft;
    this.lifeExpectancy = new LifeExpectancy();
  }

  checkYearsLeft() {
    return this.yearsLeft = this.lifeExpectancy.avarageLife - this.age;
  }

  mercuryYearsLeft() {
    return this.yearsLeft = Math.round(this.yearsLeft / .24);
  }

  venusYearsLeft() {
    return this.yearsLeft = Math.round(this.yearsLeft / .62);
  }

  marsYearsLeft() {
    return this.yearsLeft = Math.round(this.yearsLeft / 1.88);
  }

  jupiterYearsLeft() {
    return this.yearsLeft = Math.round(this.yearsLeft /= 11.86);
  }

}