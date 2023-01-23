// faster/easier way to access/unpack varaibles from Arrays, Objects (later video) 

const bob = {
    first: 'bob',
    last: 'sanders',
    city: 'chicago',
    siblings: {
        sister: 'jane',
    },
};

const last = 'Some value';
const {last:hello, first, city, zip, siblings:{sister:favSibling} } = bob;
console.log(first, city, zip, hello, favSibling);

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;

// console.log(firstName, lastName, sister);

function person({first, last, siblings: {sister} }) {
// function person(x) {
    // console.log(x.first, x.last,x.siblings.sister);

    // const {first, last, siblings: {sister} } = x; 
    console.log(first, last, sister);
}
person(bob);