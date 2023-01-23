// Array.form - NOT ON PROTOTYPE

// form - returns Array Object from an Object 
// with a length property or an iterable object 
// from - turns array-like/ish into array - string, nodelist, Set

const udemy ='udemy'
// console.log(Array.from(udemy));

const text = document.querySelectorAll('.text')
// console.log(text);
// const newText = Array.from(text);

// const newText = Array.from(text).find((item) => item.textContent === 'person')
// console.log(newText);

const items = Array.from({length: 120}, (_, index) => {
    return index
})
// console.log(items);

const itemperPages = 10
const pages = items.length / itemperPages
// console.log(pages);

const newItem = Array.from({length: pages}, (_, index) => {
    const start = index * itemperPages
    const tempItems = items.slice(start, start + itemperPages)
    return tempItems
})
console.log(newItem);
