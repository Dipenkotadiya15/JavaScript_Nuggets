function makeUpperCase(value) {
    console.log(value.toUpperCase());
}
makeUpperCase('peter');

function reverseString (value) {
    console.log(value.split('').reverse().join(''));
}

function handleName(name, cb) {
    const fullname = `${name} smith`
    cb(fullname)
    // some more logic
}

// handleName('peter', makeUpperCase);
// handleName('peter', reverseString);

// handleName('susan', function(value) {
//     console.log(value);
// })
handleName('susan',(value) => console.log(value));

const btn = document.querySelector('.btn');
btn.addEventListener('click', function() {
    console.log('Hello world');
})


// array methods, SetTimeout, event listner etc
