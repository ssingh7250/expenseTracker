const person = {
    firstName : "Rahul",
    lastName : "Pujari",
    age : 22,
    hobbies : ['music' , 'movies' , 'sports' ],

    address : {
        street : "kanyapada",
        city : "mumbai",
        state : "Maharashtra"
    }
};

person.email = "rahulpujari525@gmail.com";

console.log(person.hobbies[1]);
console.log(person.address.state);

const {firstName , lastName , age , hobbies , address : {street , city , state } , email} = person

console.log(age);
console.log(state);



const todos = [
    {
        id:1,
        text: "Take out trash",
        isCompleted : true
    } ,
    {
        id:2,
        text: "Meeting with boss",
        isCompleted : false
    },
    {
        id:3,
        text: "go to market",
        isCompleted : true
    },
    {
        id:4,
        text: "Coding",
        isCompleted : false
    }
];

for(let i=0;i<todos.length;i++){
   console.log(`the id is ${todos[i].id}`);
}

let i=0;
while(i<todos.length){
    console.log(`using whie loop ${todos[i].id}`);
    i++;
}

for(todo of todos){
    console.log(`The text is ${todo.text}`);
}

