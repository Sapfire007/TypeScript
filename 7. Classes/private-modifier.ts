class Player {
  public readonly first: string;
  public readonly last: string;
  private score: number = 0;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }

  public getname(): string{
    return `${this.first} ${this.last}`;
  }

  public getscore(): string{
    return `Score: ${this.score}`;
  }

  private secretMethod(): void {
    console.log("Secret Method");
  }
}

const dog1 = new Player("Elton", "Steele");
// console.log(dog1.score); <- cant access cuz its private
console.log(dog1.getscore());
// dog1.secretMethod();