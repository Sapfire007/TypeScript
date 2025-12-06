class Player {
  constructor(
    public first: string,
    public last: string,
    protected _score: number
  ) {}

  get score(): number {
    return this._score;
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 99999;
  }
}

const dog1 = new Player("Elton", "Steele", 10);
const dog2 = new SuperPlayer("ABC", "XYZ", 25);
console.log(dog2.score);
dog2.maxScore();
console.log(dog2.score);