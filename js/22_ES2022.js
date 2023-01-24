// ECMAScript - 2022 
// at() - takes integer and returns the item at that index - string, array

// Top level Await - Basic Example
import fetchTabs from "./22-1_FetchTabs";
const tabs = await fetchTabs();
console.log(tabs);

const score = [99, 90, 100]

const OldLast = score[score.length - 1];
console.log(OldLast);

const newLast = score.at(-1);
console.log(newLast);

const channel = 'Coding Addict';
console.log(channel.at(0));

const fetchData = async () => {
    const respo = await fetch('https://course-api.com/react-tabs-project')
    const data = await respo.json()
    console.log(data);
}

fetchData()


