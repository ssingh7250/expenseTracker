console.log(`Person 1 shows ticket`)
console.log(`Person 2 shows ticket`)

const preMovie = async () =>{
    
const wifeBringingTickets = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve('Ticket 3')
    }, 1000)
})

const getpopcorn = new Promise((resolve , reject)=>{
    resolve(` popcorn`)
});

const getButter =  new Promise((resolve , reject)=>{
    resolve(` butter`)
})

const getColddrink  = new Promise((resolve , reject)=>{
    resolve('cold drinks')
})
   
 let ticket = await wifeBringingTickets;
//     console.log("wife : i ave tickets")
//     console.log('husband : should we go in');
//     console.log('Wife : No i am hungry');

//     let popcorn = await getpopcorn;
//     console.log(`Husband : I got some ${popcorn}`)
//     console.log("husbsnd : i got some popcorn");
//     console.log("husbsnd : should we go inside")
//     console.log("wife : i need butter on muy popcorn")

//    let butter = await getButter
//    console.log(`Husband : I got some ${butter}`);
//    console.log("husbsnd : i got some popcorn");
//    console.log("husbsnd : should we go inside")
//    console.log("wife : i need colddrink with muy popcorn")

//    let colddrink = await getColddrink;
//    console.log(`Husband : ${colddrink} `)


let [popcorn , butter , colddrink] = await Promise.all([getpopcorn , getButter , getColddrink]);
console.log(`${popcorn} ${butter} ${colddrink}`);

return ticket
}

preMovie().then(m=> console.log(m))

console.log("person 4 show ticket");
console.log('Person 5 show ticket')
