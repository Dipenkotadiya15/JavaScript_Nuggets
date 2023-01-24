const heading = document.querySelector('.heading')
// console.log(heading);

const listItems = document.querySelectorAll('.list-item')
// console.log(listItems);


// const getElement = (selector, islist) => {
//     if (islist) {
//         const el = [...document.querySelectorAll(selector)];
//         if (el.length < 1) {
//             throw new Error(`Please double check selector ${selector}`);
//         }
//         return el;
//     }

//     const el = document.querySelector(selector);
//     if(el) return el;
//     throw new Error(`Please double check selector ${selector}`);
// };


const getElement = (selector, islist) => {
    const el = islist 
    ? [...document.querySelectorAll(selector)]
    : document.querySelector(selector);
     
// not a list - exist or not 
// list - empty or not

    if ((!islist && el) || (islist && !el.length < 1)) return el;

    throw new Error(`Please double check selector ${selector}`);
};


console.log(getElement('.list-item', true));
