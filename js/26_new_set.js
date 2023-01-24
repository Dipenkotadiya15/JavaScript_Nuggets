// Set Object - stores a collection of unique values of any type

// new Set()
// add(value)
// delete(value)
// clear()
// has(value)

// iterators
// entries(), keys(), values(), foreach() 

const unique = new Set();

const random = 'third';

unique.add('first');
unique.add('second');
unique.add(random);
unique.add('first');
unique.add(4);

// const result = unique.delete('third');
// console.log(result);

// const result = unique.delete('five');
// console.log(result);

// const isvalue = unique.has(4)
// console.log(isvalue); 

// console.log(unique);



// new set() - accept iterable object

const product = [
    {
        title: 'high-back bench',
        company: 'ikea',
    },
    {
        title: 'albeny table',
        company: 'markos',
    },
    {
        title: 'accent chair',
        company: 'caressa',
    },
    {
        title: 'wooden table',
        company: 'ikea',
    },
];

// const companies = product.map((item) => item.company);
// console.log(companies);

// const uniqueCompanies = new Set(companies);
// console.log(uniqueCompanies);

// const finalCompanies = ['all',...uniqueCompanies];
// console.log(finalCompanies);

// const result = ['all',...new Set(product.map((item) => item.company)];

const result = ['all', ...new Set(product.map((item) => item.company))];
console.log(result);    