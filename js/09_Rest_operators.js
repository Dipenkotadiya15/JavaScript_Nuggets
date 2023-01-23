// Rest Opretors
// gathers/collects items 
// destructuring function 
// placement important, Careful with the same name 
// rest when declare function, spread  when invoke the function 

// Arrays
const fruit = ['orange', 'banaba', 'apple', 'grapes'];
const [ first, second,...restofTheFruit ] = fruit;
console.log(first, restofTheFruit);

const specificFruit = restofTheFruit.find((fruit) => fruit === 'grapes')    
console.log(specificFruit);

// Objects 
const person = {name:'John', lastName:'Doe', job:'developer'};
const { job,...rest } = person;
console.log(job, rest);

// Functions 
const getAvg = (name,...scores) => {
    console.log(name);
    console.log(scores);
    const Avg = scores.reduce((tax,abc)=>{
        return tax += abc
    },0)/scores.length;
    console.log(Avg);
}
// getAvg(person.name,89,76,81,100)

const testScore = [23,45,67,89];
getAvg(person.name,...testScore);