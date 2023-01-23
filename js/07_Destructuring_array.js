// faster/easier way to access/unpack varaibles from Arrays, Objects (later video) 

const fruit = ['orange', 'banaba', 'apple'];
const friend = ['john', 'peter', 'bob', 'anna', 'kelly'];

const fruit1 = fruit[0];
const fruit2 = fruit[1];
const fruit3 = fruit[2];

console.log(fruit1, fruit2, fruit3);

const [enemy, , bob, , kelly, sushan] = friend;
console.log(enemy, bob, kelly, sushan);



let first = 'john';
let second = 'bob';

// let temp = second;
//     second = first;
//     first = temp;
[second, first] =[first, second]

console.log(first, second);