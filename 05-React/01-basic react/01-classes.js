class Human {
  gender = "male";

  printgender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = "Rahul";
  age = 22;

  printname = () => {
    console.log(this.name);
  };

  printage = () => {
    console.log(this.age);
  };
}

const person1 = new Person();
//person1.printage();

