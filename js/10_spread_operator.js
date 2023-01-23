// Spread Opretor
// Allows and iterable to spread/expand individually inside reciever 
// Split into single items and copy them 

const udemy = 'udemy';
let letters = [...udemy];
console.log(letters);

const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];

const bestFriend = 'arnold';

const friends = [...boys, bestFriend,...girls]
console.log(friends);

// reference
// const newFriends = friends
// newFriends[0] = 'nancy';
// console.log(friends);
// console.log(newFriends);


// copy
const newFriends = [...friends]
newFriends[0] = 'nancy';
console.log(friends);
console.log(newFriends);


// ES2018 - ES8 Objects
const person =  { name: 'john', job: 'developer'  }
const newPerson = {...person, city:'chicago', name:'peter'} 
console.log(person);
console.log(newPerson);