// 3 Methods to convert Objects into arrays
// Object.keys - Converts property names into array
// Object.values - Converts property values into array
// Object.entries() - Convert both

const person = {
    name: 'john',
    age: 25,
    status: 'student',
}

const keys = Object.keys(person)
// console.log(keys);
const values = Object.values(person)
// console.log(values);
const entries = Object.entries(person)
// console.log(entries);

// Map Method 

const newResult = entries.map((item) => {
    // console.log(item);
    const [first, second] = item;
    // console.log(first, second);
    return first;
});
// console.log(newResult);


// for of
for (const item of entries) {
    const [first, second] = item;
    console.log(first, second);
}