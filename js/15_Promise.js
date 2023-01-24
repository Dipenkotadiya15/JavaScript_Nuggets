// Promise

// async await
// Consume/Use Promise

// Pending, Rejected, Fullfiled


// const promise = new Promise((resolve, reject) => {
//                                                         // Result in Pending
//     // resolve([1, 2, 5, 8]);                          // Result in Fullfiled
//     reject('There was an error');                   // Result in Rejected
// })


let value = 2;
const promise = new Promise((resolve, reject) => {
    const randomNum = Math.floor(Math.random() * 3);
    if(randomNum === value) {
        resolve('You guessed correctly');                    
    } else {
        reject('wromg number');                   
    }
})

console.log(promise);
promise.then((msg) => console.log(msg)).catch((err) => console.log(err))