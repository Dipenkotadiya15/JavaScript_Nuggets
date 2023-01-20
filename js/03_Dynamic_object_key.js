// Dot notation 
const person = {
    name: 'john',
};

console.log(person);
person.age = 25;
console.log(person);

// square breacket notation

const items = {
    'feature-item':['item1','item2']
}
console.log(items['feature-item']);
console.log(person['name']);



let appState =  'loading';
appState = 'error';
const keyName = 'computer';
const app = {
     [appState]: true,
};
app[keyName] = 'apple';
console.log(app);



const State = {
    loading: true,
    name: '',
    job: '', 
}

function updateState(key, value) {
    State[key] = value
}

updateState('name', 'john');
updateState('job', 'React developer');
updateState('loading', 'false');

updateState('product', []);
updateState('name', 'peter');
console.log(State);