// Async/Await
// Async must be present, always returns a promise
// Await waits till promise is settled
// error handling - try/catch block



// const example = async () => {
//     return 'Hello world'
// }

// async function someFun () {
//     const result = await example()
//     console.log(result);
// }

// someFun()
// console.log(example());



const user = [
    { id: 1, name: 'john' },
    { id: 2, name: 'susan' },
    { id: 3, name: 'anna' },
]

const articles = [
    { userId: 1, articles: ['one', 'two', 'three']},
    { userId: 2, articles: [ 'four', 'five']},
    { userId: 3, articles: ['six', 'seven', 'eight', 'nine']}, 
]

const getData = async () => {
    const user = await getUser('anna')
    console.log(user);
}
getData();
 
// getUser('susan')
// .then((user) => getArticles(user.id))
// .then((articles) => console.log(articles))
// .catch((err) => console.log(err)) 



function getUser(name) {
    return new Promise ((resolve, reject) => {
        const user = user.find((user) => user.name === name)

        if (user) {
            return resolve(user)
        } else {
            reject(`No such user with name: ${name}`)
        }
    })
}

function getArticles(userId) {
    return new Promise ((resolve, reject) => {
        const userArticles = articles.find((user) => user.userId === userId)

        if (userArticles) {
            return resolve(userArticles.articles)
        } else {
            reject(`Wrong Id`)
        }
    })
}