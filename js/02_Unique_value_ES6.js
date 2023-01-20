// Unique values
const menu = [
    {
        name: 'pancakes',
        category: 'breakfast',
    },
    {
        name: 'burger',
        category: 'lunch',
    },
    {
        name: 'steack',
        category: 'dinner',
    },
    {
        name: 'bacon',
        category: 'breakfast',
    },
    {
        name: 'eggs',
        category: 'breakfast',
    },
    {
        name: 'pasta',
        category: 'dinner',
    },
];

// map -get all instances
// new set - narrow down
// ['all',...] - turn it back to array 

const categories =['all',...new Set(menu.map((x) => x.category))];
console.log(categories);

const result = document.getElementById('result').innerHTML = 
categories.map((category) => {
    return `<button>${category}</button>`
}).join(' ');
