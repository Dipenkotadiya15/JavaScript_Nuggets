// Array includes - Checks if the item is an array 
// Useful in the conditional statements

const groceries = ['milk', 'bread', 'meat'];

let randomItem = 'lemon';
randomItem = 'milk';

// const isInclude = groceries.includes(randomItem, 1);
// console.log(isInclude);

if (groceries.includes(randomItem)) {
    console.log(`Yeah! it's on the list`);
}
