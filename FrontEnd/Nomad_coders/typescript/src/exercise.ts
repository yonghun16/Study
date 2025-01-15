abstract class Human {
  constructor(
    protected height: number,
    protected weight: number
  ){}

  abstract bmi(): number;
}

class Mail extends Human {
  sex: string

  constructor(height: number, weight: number, sex: string) {
    super(height, weight);
    this.sex = sex
  }
  bmi() {
    return this.weight / this.height**2;
  }
}

const nico = new Mail(1.80, 70, "mail");
console.log(nico.bmi())
