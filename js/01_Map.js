// Map method 
const people = [
    {
        name: 'bob', 
        age: 20, 
        position: 'developer',
    },
    {
        name: 'anna', 
        age: 25, 
        position: 'designer',
    },
    {
        name: 'susy', 
        age: 30, 
        position: 'the boss',
    },
    {
        name: 'John', 
        age: 22, 
        position: 'Intern',
    },
];

// Map is a collection of elements where each element is stored as a "key" value "pair".
// Quokka.js - Extension
// Returns a New Array
// does not change the size of original array (unlike filter)
// uses values from original array when making new one 


let getAge = (x) => x.age * 2;
const ages = people.map(getAge);
// const ages = people.map((x) =>  x.age * 2);
console.log(ages);



const newPeople = people.map((a) => {
    return {
        firstName: a.name.toUpperCase(),
        oldAge: a.age + 20,
        position: a.position.toLowerCase(),
    };
});
console.log(newPeople);



const names = people.map((db) => `<h2>${db.name}</h2>`);
const result = document.getElementById('result');
result.innerHTML = names.join('');