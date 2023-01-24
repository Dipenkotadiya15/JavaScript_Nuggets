// String Includes - Checks if a string contains another string

const products = [
    { title: 'Modrn Poster' },
    { title: 'Bar Stool' },
    { title: 'Armchair' },
    { title: 'Leather Chair' },
]

const text = 'a';

const filterProduct = products.filter((product) => product.title.toLowerCase().includes(text));
console.log(filterProduct);




// const firstName = 'john';
// const result = firstName.includes('j', 1);

// const product = {
//     title: 'Leather chair'
// }

// const result = product.title.includes('le')
// console.log(result);