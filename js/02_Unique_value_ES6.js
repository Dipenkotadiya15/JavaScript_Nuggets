// Unique values
const menu = [
    {
        name: ['pancakes'],
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
categories.map((category,i) => {
    return `<button>${category}</button>`
}).join(' ');

// categories.map((category,i) => {
//     return `<button id=\`menus${i*12}\`>${category}</button>`
// }).join(' ');