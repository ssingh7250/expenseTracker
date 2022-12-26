console.log(`Person 1 shows ticket`)
console.log(`Person 2 shows ticket`)

const wifeBringingTickets = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve('Ticket 3')
    }, 1000)
})


const getPopcorn = wifeBringingTickets.then((t)=>{
    console.log("wife : i ave tickets")
    console.log('husband : should we go in');
    console.log('Wife : No i am hungry');
    return new Promise((resolve , reject)=>{
        resolve(`${t} popcorn`)
    })
})

const getButter = getPopcorn.then((t)=>{
    console.log("husbsnd : i got some popcorn");
    console.log("husbsnd : should we go inside")
    console.log("wife : i need butter on muy popcorn")
    return new Promise((resolve , reject)=>{
        resolve(`${t} butter`)
    })

})

getButter.then((t)=>console.log(t));

console.log("person 4 show ticket");
console.log('Person 5 show ticket')
