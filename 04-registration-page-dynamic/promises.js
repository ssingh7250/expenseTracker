
const posts =[
    {title : "Post One" , body : 'This is post one' , created: new Date().getTime() },
    {title : "Post Two" , body : 'This is post two', created : new Date().getTime()}

]
// let intervalId =0;
// const listEl = document.getElementById('lists');
// const timeEl = document.getElementById('time')
// let lastedited =0;
// function getPost(){
//     clearInterval(intervalId);
//     lastedited = new Date().getTime();
//     intervalId = setInterval(()=>{
//         let output ="";
//         posts.forEach((post , index)=>{
//             output += `<li>${post.title}  created   ${(new Date().getTime()-post.created)/1000} seconds ago</li>`
            
//         })
//         listEl.innerHTML = output;
//         timeEl.innerHTML = `last edited ${(new Date().getTime()-lastedited)/1000}`
//     } ,1000)
       
// }


// function createPost(post){
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             posts.push({...post , created: new Date().getTime()});

//             const error = false;
//             if(!error){
//                 resolve()
//             }else{
//                 reject('Error : Something went wrong');
//             }
//         } , 1000)
//     })
// }

// // createPost({title:"Post Three" , body:"This is Post 3"  })
// // .then(()=>{
// //     getPost()
// //     deletePost().then(()=>{
// //         getPost()
// //         deletePost().then(()=>{
// //             getPost()
// //             deletePost().then(()=>{
// //                 getPost()
// //                 deletePost().then(()=>{
// //                     createPost({title:"Post four" , body:"This is Post 4"})
// //                     .then(()=>{
// //                         getPost()
// //                         deletePost()
// //                     }).catch(err=>console.log(err))
// //                 }).catch(err=>console.log("Inside catch block"))
// //             }).catch(err=>console.log(err))
// //         })
// //     })
// // })

// function lasteditedUserTime(){
//     return new Promise((resolve , reject)=>{
//          setTimeout(()=>{
           
//            const error = false;
//            if(!error){
//                resolve(lastedited = new Date().getTime())
//            }else{
//                reject('Error : Something went wrong');
//            }
//          } , 1000)
//     })
// }

//let promise1 = createPost({title:"Post Three" , body :"This is Post Four"});
//let promise2 =  lasteditedUserTime();

// Promise.all([promise1 , promise2])
// .then(value => console.log(value));

async function raja(){


let deletePost = await new Promise((res , rej)=>{
            if(posts.length>0){
                setTimeout(()=>{
                    let pop =  posts.pop();
                    res(`${pop.title}`)
                
                } , 1000)
            }else{
                rej(`Empty array`)
            }

        })

        console.log(deletePost)    

}
raja()

