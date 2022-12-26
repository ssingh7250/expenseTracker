let today = new Date();
console.log(today);
function Student(firstName , lastName , age , rollNo , sex ){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.rollNo = rollNo;
    this.sex = sex;

    this.getBirthYear = function(){
        return today.getFullYear-age;
    }

    this.fullName = function(){
        return `The full name is ${this.firstName} ${this.lastName}`;
    }
}

const s1 = new Student("Rahul" , "Pujari" , 22 , 8691 , "male");
const s2 = new Student("Sarthak" , "Shirapure" , 12 , 7865 , "male");



console.log(s1.fullName());

const eligible = (s) =>{
    return temp = s.age >18 ? "eligible":"Not eligible";
}

console.log(eligible(s1));
console.log(eligible(s2));

