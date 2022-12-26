
class Student{
    constructor(firstName , lastName , age , rollNo , sex ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.rollNo = rollNo;
        this.sex = sex
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    getAge(){
        return this.age;
    }

}

const s1 = new Student("Rahul" , "Pujari" , 22 , 8691 , "male");

console.log(s1.getFullName());
console.log(s1.getAge())